import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../constants";

const UserContext = createContext({
    userData: null,
    logIn: (email, password, rememberMe, setLoading) => {},
    logInOAuth2: (token) => {},
    logOut: () => {},
    loading: true,
    accessToken: "",
    statusCode: 0
});

export const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState<any>(null);
    const [accessToken, setAccessToken] = useState<string>("");
    const [statusCode, setStatusCode] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchToken = async (email, password) => {
        return axios(
            API_BASE_URL + "/uaa/oauth/token",
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
            API_BASE_URL + "/uaa/oauth/token",
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

    const fetchUserData = (token) => {
        const fetchUserData = async () => {
            return axios(
                API_BASE_URL + "/account/current",
                {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }
            )
        }
        fetchUserData().then(res => {
            const data = {
                email: res.data.username,
                name: res.data.name,
                surname: res.data.surname,
                photo: res.data.photo
            }
            setUserData(data);
            setLoading(false);
        }).catch(error => {
            console.log(error)
            setLoading(false);
        })
    }

    const reLogIn = (token) => {
        refreshToken(token)
            .then(res => {
                setAccessToken(res.data.access_token);
                localStorage.setItem('refresh_token', res.data.refresh_token);
                setStatusCode(0);
                fetchUserData(res.data.access_token)
            })
            .catch(error => {
                setStatusCode(error.response.status);
                setLoading(false);
                localStorage.removeItem('refresh_token');
            })
    }

    const logIn = (email, password, rememberMe, _setLoading) => {
        fetchToken(email, password)
            .then(res => {
                setAccessToken(res.data.access_token);
                if (rememberMe) {
                    localStorage.setItem('refresh_token', res.data.refresh_token);
                }
                setStatusCode(0);
                fetchUserData(res.data.access_token);
                _setLoading(false);
            })
            .catch(error => {
                setStatusCode(error.response.status ? error.response.status : 500);
                _setLoading(false);
            })
    }

    const logInOAuth2 = (token) => {
        fetchUserData(token);
    }

    const logOut = () => {
        localStorage.removeItem('refresh_token');
        setUserData(null);
    }

    useEffect(() => {
        const refreshToken = localStorage.getItem("refresh_token");
        if (refreshToken) {
            reLogIn(refreshToken);
        } else {
            setLoading(false);
        }
    }, [])

    return (
        <UserContext.Provider
            value={{ userData, logIn, logInOAuth2, logOut, loading, accessToken, statusCode }}
        >
            {children}
        </UserContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(UserContext);
};