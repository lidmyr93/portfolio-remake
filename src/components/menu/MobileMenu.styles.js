import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const menuStyle = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.theme.menuText};
`;
export const MenuWrapper = styled.div`
  ${menuStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 10;
  transition: 0.5s;
  transform: scale(
    ${({ state }) => (state === "entering" || state === "entered" ? 10 : 1)}
  );
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const BurgerIcon = styled(FontAwesomeIcon)`
  color: black;
  z-index: 2;
  font-size: 1.5rem;
  transform: scale(
    ${({ state }) => (state === "entering" || state === "entered" ? 0.2 : 1)}
  );
`;

export const Links = styled.div`
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  top: -35px;
  right: 5px;
  opacity: ${({ state }) =>
    state === "entering" || state === "entered" ? 1 : 0};
  transform: scale(
    ${({ state }) => (state === "entering" || state === "entered" ? 0.2 : 1)}
  );
  pointer-events: ${(props) => (!props.menuOpen ? "none" : "initial")};
`;
export const StyledLink = styled(Link)`
  font-size: 1rem;
  margin-bottom: 5px;
  text-decoration: none;
  color: black;
  font-weight: 700;
`;
