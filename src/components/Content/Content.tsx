import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Login } from "../../pages/Login/Login";
import { Signup } from "../../pages/Signup/Signup";
import Protected from "../../pages/Protected";
import OAuth2RedirectHandler from "../OAuth2RedirectHandler/OAuth2RedirectHandler";
import { MainContent } from "./Content.styled";
import { NotFound } from "../../pages/NotFound/NotFound";

export const Content = () => {
    return (
        <MainContent>
            <Routes>
                <Route
                    path="*"
                    element={<NotFound />}
                />
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/login"
                    element={
                        <Protected
                            authorized={false}
                        >
                            <Login />
                        </Protected>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <Protected
                            authorized={false}
                        >
                            <Signup />
                        </Protected>
                    }
                />
                <Route
                    path="/oauth2/redirect"
                    element={
                        <Protected
                            authorized={false}
                        >
                            <OAuth2RedirectHandler />
                        </Protected>
                    }>
                </Route>
            </Routes>
        </MainContent>
    )
}

export default Content