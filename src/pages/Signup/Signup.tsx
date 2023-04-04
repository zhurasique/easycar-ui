import {Buttons, Layout, Step, SecondStep, Block, Previous} from "./Signup.styled"
import { Button, Form, Input, Steps } from "antd";
import {
    LockOutlined,
    UserOutlined,
    MailOutlined,
    UserAddOutlined,
    PhoneOutlined,
    ArrowRightOutlined,
    CheckOutlined,
    InfoCircleOutlined,
    ArrowLeftOutlined
} from "@ant-design/icons";
import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../constants";
import { redirect } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { ErrorDiv } from "../../components/Login/Login.styled";

export const Signup = (props) => {

    const [current, setCurrent] = useState(0);
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const { logIn, statusCode } = UserAuth();

    document.title = props.title;

    const firstContent = () => {
        return (
            <>
                <p>Name</p>
                <Form.Item
                    name="name"
                    hasFeedback
                >
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        autoComplete={"name"}
                        placeholder={"Piotr"}
                    />
                </Form.Item>
                <p>Surname</p>
                <Form.Item
                    name="surname"
                    hasFeedback
                >
                    <Input
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        prefix={<UserAddOutlined className="site-form-item-icon" />}
                        autoComplete={"surname"}
                        placeholder={"Fisz"}
                    />
                </Form.Item>
                <p>Phone number</p>
                <Form.Item
                    name="phone"
                    hasFeedback
                >
                    <Input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        prefix={<><PhoneOutlined className="site-form-item-icon" /><span>+48</span></>}
                        suffix={"🇵🇱"}
                        autoComplete={"phone"}
                        placeholder={"123 456 789"}
                    />
                </Form.Item>
            </>
        )
    }

    const secondContent = () => {
        return (
            <SecondStep>
                <div>
                     <p>Data which will be used for future login</p>
                </div>
                <p>Email</p>
                <Form.Item
                    name="email"
                    hasFeedback
                >
                    <Input
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        autoComplete={"email"}
                        placeholder={"piotr.fisz@gmail.com"}
                    />
                </Form.Item>
                <p>Password</p>
                <Form.Item
                    name="password"
                >
                    <Input.Password
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        autoComplete={"current-password"}
                    />
                </Form.Item>
            </SecondStep>
        )
    }

    const steps = [
        {
            title: 'Your data',
            content: firstContent(),
        },
        {
            title: 'Login data',
            content: secondContent(),
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
                            phoneNumber: phoneNumber,
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
                            disabled={loading}
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
    )
}

export default Signup