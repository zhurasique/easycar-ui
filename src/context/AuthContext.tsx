import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext({
    userData: null,
    logIn: (username, password, rememberMe) => {},
    logOut: () => {},
    loading: true,
    accessToken: "",
    statusCode: 0
});

export const AuthProvider = ({ children }) => {

    const SERVER_URI = "http://localhost:9191";

    const [userData, setUserData] = useState<any>(null);
    const [accessToken, setAccessToken] = useState<string>("");
    const [statusCode, setStatusCode] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchToken = async (username, password) => {
        return axios(
            SERVER_URI + "/uaa/oauth/token",
            {
                method: "POST",
                headers: {
                    "Authorization": "Basic YnJvd3Nlcjo="
                },
                data: new URLSearchParams({
                    username: username,
                    password: password,
                    grant_type: "password",
                    scope: "ui"
                })
            }
        )
    }

    const refreshToken = async (token) => {
        return axios(
            SERVER_URI + "/uaa/oauth/token",
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
                SERVER_URI + "/uaa/user/current",
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
                surname: res.data.surname
            }
            setUserData(data);
            setLoading(false);
        }).catch(error => {
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
            })
    }

    const logIn = (username, password, rememberMe) => {
        fetchToken(username, password)
            .then(res => {
                setAccessToken(res.data.access_token);
                if (rememberMe) {
                    localStorage.setItem('refresh_token', res.data.refresh_token);
                }
                setStatusCode(0);
                fetchUserData(res.data.access_token)
            })
            .catch(error => {
                setStatusCode(error.response.status ? error.response.status : 500);
            })
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
            value={{ userData, logIn, logOut, loading, accessToken, statusCode }}
        >
            {children}
        </UserContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(UserContext);
};