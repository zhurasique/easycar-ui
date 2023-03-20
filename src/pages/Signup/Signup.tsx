import { Layout, SignupForm } from "./Signup.styled"
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, MailOutlined, UserAddOutlined, PhoneOutlined } from "@ant-design/icons";
import { useState } from "react";

export const Signup = () => {

    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <Layout>
            <h4>Before we start...</h4>
            <SignupForm>
                <Form.Item
                    name="name"
                    hasFeedback
                >
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Name"
                        autoComplete={"name"}
                    />
                </Form.Item>
                <Form.Item
                    name="surname"
                    hasFeedback
                >
                    <Input
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        prefix={<UserAddOutlined className="site-form-item-icon" />}
                        placeholder="Surname"
                        autoComplete={"surname"}
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    hasFeedback
                >
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        placeholder="Email"
                        autoComplete={"email"}
                    />
                </Form.Item>
                <Form.Item
                    name="phone"
                    hasFeedback
                >
                    <Input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        prefix={<PhoneOutlined className="site-form-item-icon" />}
                        placeholder="Phone"
                        autoComplete={"phone"}
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
                    name="password"
                >
                    <Input.Password
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Confirm password"
                    />
                </Form.Item>
                <Form.Item style={{marginBottom: 0}}>
                    <Button
                        type="primary"
                        //onClick={() => tryLogin()}
                        loading={loading}
                        disabled={loading}
                    >
                        Log In
                    </Button>
                </Form.Item>
            </SignupForm>
        </Layout>
    )
}

export default Signup