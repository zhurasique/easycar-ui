import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Protected = ({ authorized, children}) => {
    const { userData } = UserAuth();
    if ((authorized && !userData) || (!authorized && userData)) {
        return <Navigate to="/" />;
    }
    return children;
};

export default Protected;