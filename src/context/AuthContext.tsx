import {createContext, useContext, useEffect, useState} from "react";
import { API_BASE_URL } from "../constants";
import axios from "axios";


const UserContext = createContext({
    userData: null,
    logIn: (email, password, rememberMe, setLoading) => {},
    logInOAuth2: (token) => {},
    logOut: () => {},
    loading: true,
    accessToken: "",
    status: 0
});

axios.defaults.baseURL = API_BASE_URL;

export const AuthProvider = ({ children }) => {
    const cachedUserData = localStorage.getItem("user_data");
    const [userData, setUserData] = useState<any>(cachedUserData ? JSON.parse(cachedUserData) : null);
    const [accessToken, setAccessToken] = useState<string>("");
    const [status, setStatus] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    let requesting = false;

    const fetchToken = async (email, password) => {
        return axios(
            "/uaa/oauth/token",
            {
                method: "POST",
                headers: {
                    "Authorization": "Basic YnJvd3Nlcjo="
                },
                data: new URLSearchParams({
                    username: email,
                    password: password,
                    grant_type: "password",
                    scope: "ui"
                })
            }
        )
    }

    const refreshToken = async (token) => {
        return axios(
            "/uaa/oauth/token",
            {
                method: "POST",
                headers: {
                    "Authorization": "Basic YnJvd3Nlcjo="
                },
                data: new URLSearchParams({
                    grant_type: "refresh_token",
                    refresh_token: token,
                    scope: "ui"
                })
            }
        )
    }

    const fetchUserData = () => {
        const fetchUserData = async () => {
            return axios("/account/current")
        }
        fetchUserData().then(res => {
            const account = res.data.account;
            const data = {
                email: account.username,
                name: account.name,
                surname: account.surname,
                photo: account.photo,
                roles: res.data.roles
            }
            console.log(data)
            setUserData(data);
            localStorage.setItem("user_data", JSON.stringify(data));
            setLoading(false);
            requesting = false;
        }).catch(error => {
            setLoading(false);
            requesting = false;
        })
    }

    const logIn = (email, password, rememberMe, _setLoading) => {
        fetchToken(email, password)
            .then(res => {
                setAccessToken(res.data.access_token);
                setAxiosAuthorization(res.data.access_token);
                if (rememberMe) {
                    localStorage.setItem('refresh_token', res.data.refresh_token);
                }
                setStatus(0);
                fetchUserData();
                _setLoading(false);
            })
            .catch(error => {
                setStatus(error.response.status ? error.response.status : 500);
                _setLoading(false);
            })
    }

    const logInOAuth2 = (token) => {
        setAxiosAuthorization(token);
        fetchUserData();
        requesting = true;
    }

    const reLogIn = (token) => {
        refreshToken(token)
            .then(res => {
                setAccessToken(res.data.access_token);
                setAxiosAuthorization(res.data.access_token);
                localStorage.setItem('refresh_token', res.data.refresh_token);
                setStatus(0);
                fetchUserData()
            })
            .catch(error => {
                setStatus(error.response.status);
                setLoading(false);
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('user_data');
            })
    }

    const logOut = () => {
        localStorage.removeItem('refresh_token');
        setUserData(null);
        localStorage.removeItem('user_data');
        setAxiosAuthorization(null);
    }

    useEffect(() => {
        const refreshToken = localStorage.getItem("refresh_token");
        if (refreshToken && !requesting) {
            reLogIn(refreshToken);
        } else {
            setLoading(false);
        }
    }, [])

    const setAxiosAuthorization = (token) => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }

    return (
        <UserContext.Provider
            value={{ userData, logIn, logInOAuth2, logOut, loading, accessToken, status }}
        >
            {children}
        </UserContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(UserContext);
};