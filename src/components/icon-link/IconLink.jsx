import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LinkText = styled.p`
  display: none;
  font-size: 1.25rem;
  font-weight: ${(props) => props.theme.fontWeightLarge};
`;
const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.25rem;
`;
const linkcss = css`
  margin: ${(props) => props.theme.marginSm};
  color: ${(props) => props.theme.menuText};
  text-decoration: none;
  cursor: pointer;

  height: ${(props) => props.height || "auto"};
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.text &&
    ` &:hover {
    ${StyledIcon} {
      display: none;
    }
    ${LinkText} {
      display: initial;
    }
  }`}
`;
const StyledLink = styled(Link)`
  ${linkcss}
`;
const StyledAnchor = styled.a`
  ${linkcss}
`;

const IconLink = ({ text, to, icon, height, external }) => {
  return !external ? (
    <StyledLink to={to} text={text} icon={icon} height={height}>
      {text && <LinkText>{text}</LinkText>}
      {icon && <StyledIcon icon={icon} />}
    </StyledLink>
  ) : (
    <StyledAnchor href={to} target="blank">
      {text && <LinkText>{text}</LinkText>}
      {icon && <StyledIcon icon={icon} />}
    </StyledAnchor>
  );
};

export default IconLink;
