import { Button, Checkbox, Form, Input } from "antd";
import { FormCenter, ErrorDiv } from "./Login.styled";
import { LockOutlined, UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import axios from "axios";
import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";

export const Login = () => {

    const SERVER_URI = "http://localhost:9191";

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<boolean>(true);
    const [errorStatusCode, setErrorStatusCode] = useState<number>(0);
    const { logIn } = UserAuth();


    const fetchToken = async () => {
        return axios(
            SERVER_URI + "/uaa/oauth/token",
            {
                method: "POST",
                headers: {
                    "Authorization": "Basic YnJvd3Nlcjo="
                },
                data: new URLSearchParams({
                    username: username,
                    password: password,
                    grant_type: "password",
                    scope: "ui"
                })
            }
        )
    }

    const tryLogin = () => {
        fetchToken()
            .then(res => {
                sessionStorage.setItem('token', res.data.access_token);
                if (rememberMe) {
                    localStorage.setItem('token', res.data.access_token);
                }
                logIn(false);
                setErrorStatusCode(0);
            })
            .catch(error => {
                setErrorStatusCode(error.response.status);
            })
    }

    const showError = () => {
        let errorText = "Unknown error";
        if (errorStatusCode === 400) {
            errorText = "Wrong credentials"
        } else if (errorStatusCode === 500) {
            errorText = "Server error"
        }
        return (
            <ErrorDiv>
                <InfoCircleOutlined />
                <p>{errorText}</p>
            </ErrorDiv>
        )
    }

    return (
       <FormCenter>
           <Form>
               <Form.Item
                   name="email"
                   hasFeedback
               >
                   <Input
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       prefix={<UserOutlined className="site-form-item-icon" />}
                       placeholder="Email"
                       autoComplete={"email"}
                   />
               </Form.Item>
               <Form.Item
                   name="password"
               >
                   <Input.Password
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       prefix={<LockOutlined className="site-form-item-icon" />}
                       placeholder="Password"
                       autoComplete={"current-password"}
                   />
               </Form.Item>
               <Form.Item
                   name="remember"
               >
                   <Checkbox
                       checked={rememberMe}
                       onChange={e => setRememberMe(e.target.checked)}
                   >
                       Remember me
                   </Checkbox>
               </Form.Item>

               <Form.Item style={{marginBottom: 0}}>
                   <Button
                       type="primary"
                       onClick={() => tryLogin()}
                   >
                       Log In
                   </Button>
               </Form.Item>
               {errorStatusCode ? showError() : <></>}
           </Form>
       </FormCenter>
    )
}

export default Login