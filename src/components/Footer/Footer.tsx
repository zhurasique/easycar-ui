import React from "react";

import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Copywrite, FooterSection, Links, Suggestions } from "./Footer.styled";

export const Footer = () => {
    return (
        <FooterSection>
            <Copywrite>
                <Links>
                    <GithubOutlined />
                    <LinkedinOutlined />
                </Links>
                <div>
                    <p>© 2023</p>
                </div>
            </Copywrite>
            <Suggestions>
                <p className={"topic"}>Company</p>
                <p className={"suggestion"}>About us</p>
                <p className={"suggestion"}>Advertising</p>
                <p className={"suggestion"}>Help</p>
                <p className={"suggestion"}>Contact</p>
            </Suggestions>
            <Suggestions>
                <p className={"topic"}>Legal</p>
                <p className={"suggestion"}>Privacy policy</p>
                <p className={"suggestion"}>Privacy settings</p>
            </Suggestions>
            <Suggestions>
                <p className={"topic"}>Popular car models</p>
                <p className={"suggestion"}>BMW 5 series</p>
                <p className={"suggestion"}>Mercedes-Benz S-class</p>
                <p className={"suggestion"}>Porsche Panamera</p>
                <p className={"suggestion"}>BMW 3 series</p>
            </Suggestions>
        </FooterSection>
    )
}

export default Footer