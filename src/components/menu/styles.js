import styled, { keyframes } from "styled-components";

export const MenuWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.backgroundDark};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.menuText};
  padding: ${(props) => `${props.theme.paddingMe} 0`};
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

export const Social = styled.div`
  display: flex;
`;

const logoAnim = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;
export const StyledSvg = styled.svg`
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
`;
