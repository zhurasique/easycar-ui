import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext({
    userData: null,
    logIn: () => {},
    logOut: () => {},
});

export const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState<any>(null);

    const logIn = () => {
        const fetchUserData = async () => {
            const SERVER_URI = "http://localhost:9191";
            return axios(
                SERVER_URI + "/uaa/user/current",
                {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
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
        })
    }

    const logOut = () => {
        setUserData(null);
    }

    useEffect(() => {
        logIn();
    }, [])

    return (
        <UserContext.Provider
            value={{ userData, logIn, logOut }}
        >
            {children}
        </UserContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(UserContext);
};