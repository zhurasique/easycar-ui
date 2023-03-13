import { Button, Checkbox, Form, Input } from "antd";
import { FormCenter, ErrorDiv } from "./Login.styled";
import { LockOutlined, UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";

export const Login = () => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const { logIn, statusCode } = UserAuth();


    const tryLogin = () => {
        setLoading(true);
        logIn(username, password, rememberMe, setLoading);
    }

    const showError = () => {
        let errorText = "Unknown error";
        if (statusCode === 400) {
            errorText = "Wrong credentials"
        } else if (statusCode === 500) {
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
                       loading={loading}
                       disabled={loading}
                   >
                       Log In
                   </Button>
               </Form.Item>
               {statusCode ? showError() : <></>}
           </Form>
       </FormCenter>
    )
}

export default Login