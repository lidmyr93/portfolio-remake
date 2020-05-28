import React from "react";

import {MenuWrapper, LinkWrapper, StyledLink, Social} from "./styles"

const Menu = () => {

    return (
    <MenuWrapper>
        <div>ML</div>
        <LinkWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        </LinkWrapper>

        <Social>
            <p>Gb</p>
            <p>Li</p>
        </Social>
    </MenuWrapper>
        )
}

export default Menu;