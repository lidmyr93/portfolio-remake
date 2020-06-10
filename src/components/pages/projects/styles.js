import styled, { keyframes } from "styled-components";
import { ScrollBar } from "../../../styles/general";

const HoverAnim = keyframes`
    from {
        filter: brightness(0.8);
    }
    to {
        filter: brightness(1);
        
    }
`;
export const Item = styled.div`
  color: white;
  background: ${(props) => `url(${props.background})`};
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  width: 90vw;
  margin: 0 5px 10px 5px;
  filter: brightness(0.8);
  cursor: pointer;
  &:hover {
    animation ${HoverAnim} 1s forwards;
  }
  @media screen and (min-width: 600px) {
    height: 400px;
    width: auto;
    margin: 0;
    background-size: cover;
  }
`;

export const GridContainer = styled.div`
  padding: 10px 0;
  ${ScrollBar}
  @media screen and (min-width: 600px) {
    display: grid;
    grid-auto-flow: dense;
    gap: 10px;
    grid-template-columns: 450px;
    .big {
      grid-column: span 2 / auto;
    }
    .medium {
      grid-column: span 2 / auto;
    }
  }
  @media screen and (min-width: 750px) {
    max-width: 600px;
  }
  @media screen and (min-width: 1000px) {
    max-width: 800px;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    .medium {
      grid-column: span 1 / auto;
    }
    .big {
      grid-column: span 2 / auto;
    }
  }
  @media screen and (min-width: 1100px) {
    max-width: 980px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media screen and (min-width: 1350px) {
    max-width: 1440px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
`;
