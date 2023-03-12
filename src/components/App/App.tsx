import { GlobalLayout } from "./App.styled";
import { AuthProvider } from "../../context/AuthContext";
import {Header} from "../index";

export const App = () => {
    return (
        <AuthProvider>
            <GlobalLayout>
                <Header/>
            </GlobalLayout>
        </AuthProvider>
    )
}

export default App