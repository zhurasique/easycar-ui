import { Login as LoginLayout } from "../../components";
import { Layout } from "./Login.styled"

export const Login = () => {
    return (
        <Layout>
            <LoginLayout showLabel={true} />
        </Layout>
    )
}

export default Login