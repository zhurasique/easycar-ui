import { GlobalLayout } from "./App.styled";
import { AuthProvider } from "../../context/AuthContext";
import { Header } from "../index";
import Content from "../Content/Content";
import { ConfigProvider } from "antd";

export const App = () => {
    return (
        <AuthProvider>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#5246c7',
                    },
                }}
            >
                <GlobalLayout>
                    <Header />
                    <Content />
                </GlobalLayout>
            </ConfigProvider>
        </AuthProvider>
    )
}

export default App