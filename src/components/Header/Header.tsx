import { Login } from "../index";
import { HeaderDiv, UserBox, UserMenuPopover, AuthButtons } from "./Header.styled";
import { Button, Popover, Spin } from "antd";
import { UserAuth } from "../../context/AuthContext";
import { LoadingOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

export const Header = () => {
    const { userData, loading, logOut } = UserAuth();

    const userMenuPopoverContent = () => {
        return (
            <UserMenuPopover>
                <div>
                    <SettingOutlined />
                    <p>Preferences</p>
                </div>
                <div
                    className={"last"}
                    onClick={() => logOut()}
                >
                    <LogoutOutlined />
                    <p>Logout</p>
                </div>
            </UserMenuPopover>
        )
    }

    return (
        <HeaderDiv>
            <div>
                <h3>EasyCar</h3>
            </div>
            <div>
                {loading ?
                    <Spin
                        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin/>}
                        delay={500}
                    /> :
                    userData ?
                        <Popover placement="bottomRight" content={userMenuPopoverContent} trigger="click">
                            <UserBox>
                                <UserOutlined />
                                <p>{userData!["name"]} {userData!["surname"]}</p>
                            </UserBox>
                        </Popover> :
                        <AuthButtons>
                            <Popover placement="bottomLeft" content={Login} trigger="click">
                                <Button>
                                    Log In
                                </Button>
                            </Popover>
                            <Button type={"primary"}>
                                Sign Up
                            </Button>
                        </AuthButtons>

                }
            </div>
        </HeaderDiv>
    )
}

export default Header