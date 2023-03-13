import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Login } from "../../pages/Login/Login";
import { Signup } from "../../pages/Signup/Signup";
import Protected from "../../pages/Protected";

export const Content = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/login"
                element={
                    <Protected unauthenticated={true}>
                        <Login />
                    </Protected>
                }
            />
            <Route
                path="/signup"
                element={
                    <Protected unauthenticated={true}>
                        <Signup />
                    </Protected>
                }
            />
        </Routes>
    )
}

export default Content