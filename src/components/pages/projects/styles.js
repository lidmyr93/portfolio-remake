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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  font-weight: bold;
  color: white;
  background: ${(props) => `url(${props.background})`};
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  width: auto;
  filter: brightness(0.8);
  cursor: pointer;
  &:hover {
    animation ${HoverAnim} 1s forwards;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  max-width: 1440px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-flow: dense;
  grid-column: 2 / 14;
  grid-row: 2 / auto;
  gap: 10px;
  ${ScrollBar}
  .medium {
    grid-column: span 1;
  }

  .big {
    grid-column: span 2 / auto;
  }
`;
