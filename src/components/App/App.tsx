import { GlobalLayout } from "./App.styled";
import { AuthProvider } from "../../context/AuthContext";
import { Header } from "../index";
import Content from "../Content/Content";

export const App = () => {
    return (
        <AuthProvider>
            <GlobalLayout>
                <Header />
                <Content />
            </GlobalLayout>
        </AuthProvider>
    )
}

export default App