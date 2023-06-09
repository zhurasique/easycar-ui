import {EmptyUserPhoto, Login} from "../index";
import { HeaderDiv, UserBox, UserMenuPopover, AuthButtons, LogoDiv, HeaderSection } from "./Header.styled";
import { Button, Popover, Spin } from "antd";
import { UserAuth } from "../../context/AuthContext";
import { LoadingOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

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
        <HeaderSection>
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
                                    {userData!["photo"] ?
                                        <img src={"data:image/png;base64, " + userData!["photo"]} alt={"photo"} /> :
                                        <EmptyUserPhoto
                                            nameFirstLetter={String(userData!["name"]).charAt(0)}
                                        />
                                    }
                                    <p>{userData!["name"]} {userData!["surname"]}</p>
                                </UserBox>
                            </Popover> :
                            <AuthButtons>
                                <Popover placement="bottomRight" content={<Login showLabel={false} />} trigger="click">
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
        </HeaderSection>
    )
}

export default Header