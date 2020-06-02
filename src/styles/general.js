import styled, {css} from "styled-components";

export const ScrollBar = css`

::-webkit-scrollbar {
-webkit-appearance: none;
}

::-webkit-scrollbar:vertical {
width: 10px;
}

::-webkit-scrollbar:horizontal {
height: 12px;
}

::-webkit-scrollbar-thumb {
background-color: ${props => props.theme.menuText};
border-radius: 0px;
}

::-webkit-scrollbar-track {
border-radius: 0px;
background-color: transparent;
}
`;

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: calc(100vh - 60px);
  overflow-y: auto;
  ${ScrollBar};
  @media screen and (min-width: 600px) {
    height: 100vh;

  }
  @media screen and (min-width: 1000px) {
    overflow: hidden;
    grid-template-columns: ${(props) => props.columns || "1.5fr 1fr"};
    grid-template-columns: ${(props) => props.single && "auto"};
    grid-template-rows: ${(props) => props.rows || "1fr"};
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  color: ${(props) => props.theme.color};
`;
export const Grid = styled.div`
  display: grid;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  grid-template-columns: 1fr;

  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: ${(props) => props.columns};
    grid-template-rows: ${(props) => props.rows};
  }
`;
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => props.column && "column"};
`;
export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${(props) => props.width || "50%"};
  justify-content: inherit;
  align-items: inherit;
`;
export const TextBlock = styled.div`
  width: 50%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased !important;
  -moz-font-smoothing: antialiased !important;
  text-rendering: optimizelegibility !important;
  letter-spacing: 0.03em;
`;

export const Button = styled.button`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "25px"};
  border-radius: ${(props) => props.borderRadius || "25px"};
  border: ${(props) => props.border || "none"};
  background: ${(props) => props.background || props.theme.menuText};
  font-weight: ${props => props.fontWeight || "700"};
  color: ${props => props.color || props.theme.color};
  font-size: ${props => props.fontSize || "1.25rem"};
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 1.5em ${props => props.hoverColor || props.theme.color};
  }
`;

export const VerticalHeader = styled.h2`
  display: none;

  @media screen and (min-width: 1120px) {
    display: block;
    width: min-content;
    height: min-content;
    font-size: ${(props) => props.fontSize || "initial"};
    color: ${(props) => props.theme.color};
    text-decoration: underline;
    margin: 0;  
    transform: ${props => props.right && "rotate(90deg)"};
    transform: ${props => props.left && "rotate(270deg)"};
    transform-origin: ${props => props.right && "center"};
    transform-origin: ${props => props.left && "center"};
    margin-top: ${props => props.top && "30px"};
    margin-bottom: ${props => props.bottom && "30px"};
    align-self: ${props => props.bottom && "flex-end"};
  }
`;


