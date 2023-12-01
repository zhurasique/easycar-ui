import { GlobalLayout } from "./App.styled";
import { AuthProvider } from "../../context/AuthContext";
import { Header, Footer } from "../index";
import Content from "../Content/Content";
import { ConfigProvider } from "antd";

export const App = () => {
    return (
        <AuthProvider>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#000000',
                    },
                }}
            >
                <GlobalLayout>
                    <Header />
                    <Content />
                    <Footer />
                </GlobalLayout>
            </ConfigProvider>
        </AuthProvider>
    )
}

export default App