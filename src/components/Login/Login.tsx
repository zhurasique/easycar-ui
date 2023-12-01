import { Button, Checkbox, Form, Input } from "antd";
import { FormCenter, ErrorDiv, OAuth2ItemGoogle, OAuth2ItemFacebook, ManualLogin, OAuth2Login, SignupPropose } from "./Login.styled";
import { LockOutlined, UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL } from "../../constants";
import { ReactComponent as GoogleLogo } from '../../assets/images/logo/google-logo.svg';
import { ReactComponent as FacebookLogo } from '../../assets/images/logo/facebook-logo.svg';
import { Link } from "react-router-dom";

export const Login = ({showLabel}) => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const { logIn, status } = UserAuth();


    const tryLogin = () => {
        setLoading(true);
        logIn(email, password, rememberMe, setLoading);
    }

    const showError = () => {
        let errorText = "Unknown error";
        if (status === 400) {
            errorText = "Wrong credentials"
        } else if (status === 500) {
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
           <ManualLogin>
               <Form>
                   {showLabel ? <p>Email</p> : <></>}
                   <Form.Item
                       name="email"
                       hasFeedback
                   >
                       <Input
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           prefix={<UserOutlined className="site-form-item-icon" />}
                           placeholder={showLabel ? "" : "Email"}
                           autoComplete={"email"}
                       />
                   </Form.Item>
                   {showLabel ? <p>Password</p> : <></>}
                   <Form.Item
                       name="password"
                   >
                       <Input.Password
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           prefix={<LockOutlined className="site-form-item-icon" />}
                           placeholder={showLabel ? "" : "Password"}
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
                   {status ? showError() : <></>}
               </Form>
           </ManualLogin>
           <OAuth2Login>
               <h4 style={showLabel ? {} : {margin: 0}}>Or</h4>
               <a href={GOOGLE_AUTH_URL}>
                   <OAuth2ItemGoogle>
                       <div>
                           <GoogleLogo />
                       </div>
                       <div>
                           <p>Log in with Google</p>
                       </div>
                   </OAuth2ItemGoogle>
               </a>
               <a href={FACEBOOK_AUTH_URL}>
                   <OAuth2ItemFacebook>
                       <div>
                           <FacebookLogo />
                       </div>
                       <div>
                           <p>Log in with Facebook</p>
                       </div>
                   </OAuth2ItemFacebook>
               </a>
           </OAuth2Login>
           {showLabel ?
               <SignupPropose>
                   <p>Don't have an account?
                       <Link to={"/signup"}>
                           <span>Sign up</span>
                       </Link>
                   </p>
               </SignupPropose> : <></>
           }
       </FormCenter>
    )
}

export default Login