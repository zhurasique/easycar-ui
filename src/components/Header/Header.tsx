import { Login } from "../index";
import { HeaderDiv, UserBox, UserMenuPopover, AuthButtons, LogoDiv } from "./Header.styled";
import { Button, Popover, Spin } from "antd";
import { UserAuth } from "../../context/AuthContext";
import { LoadingOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

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
            <Link to={"/"}>
                <LogoDiv>
                    <h3>EasyCar</h3>
                </LogoDiv>
            </Link>
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
                            <Link to="/signup">
                                <Button type={"primary"}>
                                    Sign Up
                                </Button>
                            </Link>
                        </AuthButtons>

                }
            </div>
        </HeaderDiv>
    )
}

export default Header