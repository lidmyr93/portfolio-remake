import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
export const MenuWrapper = styled.div`
  order: 2;
  width: 100%;
  background: ${(props) => props.theme.backgroundDark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.menuText};
  @media screen and (min-width: 600px) {
    order: 0;
    padding: ${(props) => `${props.theme.paddingMe} 0`};
    flex-direction: column;
  }

  @media screen and (min-width: 1000px) {
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  @media screen and (min-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Social = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: flex;
  }
`;

const logoAnim = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;
export const StyledSvg = styled.svg`
  display: none;
  @media screen and (min-width: 600px) {
    display: initial;
    & path:nth-child(1) {
      stroke-dasharray: 142.0735321044922px;
      stroke-dashoffset: 142.0735321044922px;
      animation: ${logoAnim} 3s ease forwards 0.3s;
    }
    & path:nth-child(2) {
      stroke-dasharray: 91.06382751464844px;
      stroke-dashoffset: 91.06382751464844px;
      animation: ${logoAnim} 3s ease forwards 0.6s;
    }
  }
`;
export const SvgLink = styled(Link)`
  display: none;
  @media screen and (min-width: 600px) {
    display: initial;
  }
`;
