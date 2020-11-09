import React, { useState } from "react";

import { Transition } from "react-transition-group";
import {
  MenuWrapper,
  Links,
  StyledLink,
  BurgerIcon,
} from "./MobileMenu.styles";
const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Transition in={menuOpen} timeout={100}>
      {(state) => (
        <MenuWrapper state={state} onClick={handleClick}>
          <Links state={state} menuOpen={menuOpen}>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>

            <StyledLink to="/projects">Projects</StyledLink>
          </Links>
          <BurgerIcon icon={["fas", "bars"]} state={state} />
        </MenuWrapper>
      )}
    </Transition>
  );
};
export default MobileMenu;
