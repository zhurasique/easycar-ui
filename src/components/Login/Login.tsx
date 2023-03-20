import { Button, Checkbox, Form, Input } from "antd";
import {FormCenter, ErrorDiv, OAuth2Item } from "./Login.styled";
import { LockOutlined, UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { GOOGLE_AUTH_URL } from "../../constants";

export const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const { logIn, statusCode } = UserAuth();


    const tryLogin = () => {
        setLoading(true);
        logIn(email, password, rememberMe, setLoading);
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
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
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
               <h4>Or</h4>
               <a href={GOOGLE_AUTH_URL}>
                   <OAuth2Item>
                       <div>
                           <img src={require("../../assets/images/google-logo.png")}/>
                       </div>
                       <div>
                           <p>Log in with Google</p>
                       </div>
                   </OAuth2Item>
               </a>
               {statusCode ? showError() : <></>}
           </Form>
       </FormCenter>
    )
}

export default Login