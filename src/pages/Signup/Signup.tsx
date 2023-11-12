import {
    Buttons,
    Layout,
    Step,
    SecondStep,
    Block,
    Previous,
    Form,
    OAuth2Login,
    InputWithTip,
    TipContainer
} from "./Signup.styled"
import {Button, Input, Steps, theme} from "antd";
import {
    LockOutlined,
    UserOutlined,
    MailOutlined,
    UserAddOutlined,
    PhoneOutlined,
    ArrowRightOutlined,
    CheckOutlined,
    InfoCircleOutlined,
    ArrowLeftOutlined,
    CheckCircleTwoTone,
    InfoCircleTwoTone
} from "@ant-design/icons";
import React, { useState } from "react";
import axios from "axios";
import {API_BASE_URL, FACEBOOK_AUTH_URL, GOOGLE_AUTH_URL} from "../../constants";
import { redirect } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import {ErrorDiv, OAuth2ItemFacebook, OAuth2ItemGoogle} from "../../components/Login/Login.styled";
import { ReactComponent as GoogleLogo } from '../../assets/images/logo/google-logo.svg';
import { ReactComponent as FacebookLogo } from '../../assets/images/logo/facebook-logo.svg';

export const Signup = (props) => {

    const [current, setCurrent] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const { logIn, statusCode } = UserAuth();
    const { token } = theme.useToken();

    document.title = props.title;

    const firstContent = () => {
        return (
            <Form>
                <div>
                    <p>Name</p>
                    <Input
                        value={name}
                        onChange={(e) => changeName(e.target.value)}
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        suffix={isValidName() && (<CheckCircleTwoTone twoToneColor={token.colorPrimary} />)}
                        autoComplete={"name"}
                        placeholder={"Piotr"}
                    />
                </div>
                <div>
                    <p>Surname</p>
                    <Input
                        value={surname}
                        onChange={(e) => changeSurname(e.target.value)}
                        prefix={<UserAddOutlined className="site-form-item-icon" />}
                        suffix={isValidSurname() && (<CheckCircleTwoTone twoToneColor={token.colorPrimary} />)}
                        autoComplete={"surname"}
                        placeholder={"Fisz"}
                    />
                </div>
                <div>
                    <p>Phone number</p>
                    <Input
                        value={phoneNumber}
                        onChange={(e) => changePhoneNumber(e.target.value)}
                        prefix={<><PhoneOutlined className="site-form-item-icon" /><span>+48</span></>}
                        suffix={isValidPhoneNumber() ? <CheckCircleTwoTone twoToneColor={token.colorPrimary} /> : <>🇵🇱</>}
                        autoComplete={"phone"}
                        placeholder={"123 456 789"}
                    />
                </div>
            </Form>
        )
    }

    const secondContent = () => {
        return (
            <Form>
                <SecondStep>
                    <div className={"hint"}>
                        <p>Data which will be used for future login</p>
                    </div>
                    <div>
                        <p>Email</p>
                        <Input
                            type={"email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            suffix={isValidEmail() && (<CheckCircleTwoTone twoToneColor={token.colorPrimary} />)}
                            autoComplete={"email"}
                            placeholder={"piotr.fisz@gmail.com"}
                        />
                    </div>
                    <div>
                        <p>Password</p>
                        <InputWithTip>
                            <Input.Password
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                autoComplete={"current-password"}
                                placeholder={"✖✖✖✖✖✖"}
                            />
                            <TipContainer>
                                <InfoCircleTwoTone
                                    twoToneColor={token.colorPrimary}
                                    title={"Password should be at least 6 characters long."}
                                />
                            </TipContainer>
                        </InputWithTip>
                    </div>
                </SecondStep>
            </Form>
        )
    }

    const changeName = (v) => {
        if (v.length <= 15) {
            setName(v);
        } else if (v === "") {
            setName("");
        }
    }

    const changeSurname = (v) => {
        if (v.length <= 15) {
            setSurname(v);
        } else if (v === "") {
            setSurname("");
        }
    }

    const changePhoneNumber = (v) => {
        let trim = v.replaceAll(" ", "");
        if (phoneNumber[phoneNumber.length - 1] === " " && v.length < phoneNumber.length) {
            trim = trim.slice(0, -1);
        }
        if (trim.length <= 9) {
            let result = "";
            for (let i = 0; i < trim.length; i++) {
                result += trim[i];
                for (let j = 2; j < 8; j = j + 3) {
                    if (i === j) {
                        result += " ";
                    }
                }
            }
            setPhoneNumber(result)
        } else if (v === "") {
            setPhoneNumber("")
        }
    }

    const isValidName = () => {
        return name.length > 1;
    }

    const isValidSurname = () => {
        return surname.length > 1;
    }

    const isValidPhoneNumber = () => {
        return phoneNumber.replaceAll(" ", "").length === 9;
    }

    const isValidEmail = () => {
        const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        return email.toLowerCase().match(emailRegex);
    }

    const isValidPassword = () => {
        return password.length >= 6;
    }

    const steps = [
        {
            title: 'Your data',
            content: firstContent(),
            valid: isValidName() && isValidSurname() && isValidPhoneNumber()
        },
        {
            title: 'Login data',
            content: secondContent(),
            valid: isValidEmail() && isValidPassword()
        },
    ];

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

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

    const signup = () => {
        const trySignUp = async () => {
            return axios(
                API_BASE_URL + "/account/",
                {
                    method: "POST",
                    data: {
                        user: {
                            username: email,
                            password: password
                        },
                        account: {
                            username: email,
                            phoneNumber: phoneNumber.trim(),
                            name: name,
                            surname: surname
                        }
                    }
                }
            )
        }
        setLoading(true);
        trySignUp()
            .then(res => {
                redirect("/");
                logIn(email, password, true, setLoading);
            })
    }

    return (
        <>
            <Layout>
                <h3>Registration</h3>
                <p>Before we start...</p>
                <Steps
                    labelPlacement={"vertical"}
                    current={current}
                    items={items}
                    size={"small"}
                />
                <Step>
                    <div>{steps[current].content}</div>
                </Step>
                <Buttons>
                    {current < steps.length - 1 && (
                        <Button
                            type="primary"
                            onClick={() => setCurrent(current + 1)}
                            disabled={!steps[current].valid}
                        >
                            Next <ArrowRightOutlined />
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Block>
                            <Button
                                type="primary"
                                onClick={() => signup()}
                                loading={loading}
                                disabled={loading || !steps[current].valid}
                            >
                                Sign up <CheckOutlined />
                            </Button>
                            {statusCode ? showError() : <></>}
                        </Block>
                    )}
                    {current > 0 && (
                        <Previous>
                            <Button
                                shape="circle"
                                onClick={() => setCurrent(current - 1)}
                            >
                                <ArrowLeftOutlined />
                            </Button>
                        </Previous>
                    )}
                </Buttons>
            </Layout>
            {current === 0 && (
                <OAuth2Login>
                    <h4>Or</h4>
                    <a href={GOOGLE_AUTH_URL}>
                        <OAuth2ItemGoogle>
                            <div>
                                <GoogleLogo />
                            </div>
                            <div>
                                <p>Sign in with Google</p>
                            </div>
                        </OAuth2ItemGoogle>
                    </a>
                    <a href={FACEBOOK_AUTH_URL}>
                        <OAuth2ItemFacebook>
                            <div>
                                <FacebookLogo />
                            </div>
                            <div>
                                <p>Sign in with Facebook</p>
                            </div>
                        </OAuth2ItemFacebook>
                    </a>
                </OAuth2Login>
            )}
        </>
    )
}

export default Signup