import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Login } from "../../pages/Login/Login";
import { Signup } from "../../pages/Signup/Signup";
import Protected from "../../pages/Protected";
import OAuth2RedirectHandler from "../OAuth2RedirectHandler/OAuth2RedirectHandler";
import { MainContent } from "./Content.styled";
import { NotFound } from "../../pages/NotFound/NotFound";

export const Content = () => {
    const suffix = " - EasyCar";

    return (
        <MainContent>
            <Routes>
                <Route
                    path="*"
                    element={
                        <NotFound
                            title={"Page not found" + suffix}
                        />
                    }
                />
                <Route
                    path="/"
                    element={
                        <Home
                            title={"EasyCar - that's da cars!"}
                        />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Protected
                            authorized={false}
                        >
                            <Login
                                title={"Login" + suffix}
                            />
                        </Protected>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <Protected
                            authorized={false}
                        >
                            <Signup
                                title={"Signup" + suffix}
                            />
                        </Protected>
                    }
                />
                <Route
                    path="/oauth2/redirect"
                    element={
                        <Protected
                            authorized={false}
                        >
                            <OAuth2RedirectHandler
                                title={"Login" + suffix}
                            />
                        </Protected>
                    }>
                </Route>
            </Routes>
        </MainContent>
    )
}

export default Content