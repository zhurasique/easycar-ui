import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext({
    userData: null,
    logIn: (onLoad) => {},
    logOut: () => {},
    loading: true
});

export const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const logIn = (onLoad) => {
        const fetchUserData = async () => {
            const token = onLoad ? localStorage.getItem("token") : sessionStorage.getItem("token")
            const SERVER_URI = "http://localhost:9191";
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

    const logOut = () => {
        setUserData(null);
    }

    useEffect(() => {
        logIn(true);
    }, [])

    return (
        <UserContext.Provider
            value={{ userData, logIn, logOut, loading }}
        >
            {children}
        </UserContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(UserContext);
};