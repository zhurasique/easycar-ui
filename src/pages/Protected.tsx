import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Protected = (props, { children }) => {
    const { userData } = UserAuth();
    if ((props.protected && !userData) || (props.unauthenticated && userData)) {
        return <Navigate to="/" />;
    }
    return children;
};

export default Protected;