import {EmptyUserPhoto, Login} from "../index";
import {
    HeaderDiv,
    UserBox,
    UserMenuPopover,
    AuthButtons,
    LogoDiv,
    HeaderSection,
    Flex,
    SellButton
} from "./Header.styled";
import { Button, Popover } from "antd";
import { UserAuth } from "../../context/AuthContext";
import { SettingOutlined, LogoutOutlined, PlusOutlined, CarOutlined, StarOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import React from "react";

export const Header = () => {
    const { userData, logOut } = UserAuth();

    const userMenuPopoverContent = () => {
        return (
            <UserMenuPopover>
                <div>
                    <CarOutlined />
                    <p>My adverts</p>
                </div>
                <div>
                    <StarOutlined />
                    <p>Bookmarks</p>
                </div>
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
                <Flex>
                    <div>
                        <Link to={"/"}>
                            <LogoDiv>
                                <h3>EasyCar</h3>
                            </LogoDiv>
                        </Link>
                    </div>
                    <SellButton>
                        <Link to={"/"}>
                            <Button>
                                <PlusOutlined />
                                Sell car
                            </Button>
                        </Link>
                    </SellButton>
                </Flex>
                <div>
                    {userData ? <Popover placement="bottomRight" content={userMenuPopoverContent} trigger="click">
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