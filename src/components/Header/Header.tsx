import { Login } from "../index";
import { HeaderDiv } from "./Header.styled";
import { Button, Popover} from "antd";
import { UserAuth } from "../../context/AuthContext";

export const Header = () => {
    const { userData } = UserAuth();

    return (
        <HeaderDiv>
            {userData ? <p>{userData!["name"]}</p>:
                <Popover placement="bottomLeft" content={Login} trigger="click">
                    <Button>Sign in</Button>
                </Popover>
            }
        </HeaderDiv>
    )
}

export default Header