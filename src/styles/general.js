import styled from "styled-components";

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: calc(100vh - 60px);
  overflow-y: auto;
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: ${(props) => props.columns || "1.5fr 1fr"};
    grid-template-columns: ${(props) => props.single && "1fr"};
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

  cursor: pointer;
  &:hover {
    box-shadow: 0 0 1.5em white;
  }
`;

export const VerticalHeader = styled.h2`
  display: none;
  font-size: ${(props) => props.fontSize || "initial"};
  color: ${(props) => props.theme.color};
  text-decoration: underline;
  margin: 0;
  writing-mode: vertical-lr;
  align-self: flex-start;
  margin-top: 8vh;
  @media screen and (min-width: 600px) {
    display: initial;
  }
`;
