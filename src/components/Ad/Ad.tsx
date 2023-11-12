import React from "react";

import audi from '../../assets/images/ad/audi.jpg';

export const Ad = () => {
    return (
        <a href={"https://www.audi.ua"}>
            <img src={audi} alt={"Audi UA"}/>
        </a>
    )
}

export default Ad