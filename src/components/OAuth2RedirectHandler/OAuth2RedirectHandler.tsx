import { useSearchParams } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useEffect } from "react";

export const OAuth2RedirectHandler = (props) => {

    const [searchParams] = useSearchParams();
    const { logInOAuth2 } = UserAuth();

    document.title = props.title;

    useEffect(() => {
        logInOAuth2(searchParams.get("access_token"));
        const refreshToken = searchParams.get("refresh_token");
        if (refreshToken) {
            localStorage.setItem("refresh_token", refreshToken);
        }
    }, []);

    return (
        <></>
    )
}

export default OAuth2RedirectHandler