import styled, { keyframes } from "styled-components";

const MoveOnHover = keyframes`
    from {
        filter: grayscale(1);
    }

    to {
        filter: grayscale(0);
    }
`;

export const CardImage = styled.div`
  background: url(${(props) => props.background || "black"});
  width: 100%;
  height: 40%;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: grayscale(1);
`;

export const CardTitle = styled.div`
  background: ${(props) => props.theme.linearGradient};
  width: calc(100% - 0.5rem);
  height: 20%;
  border-bottom: 5px solid ${(props) => props.theme.menuText};
  display: flex;
  align-items: center;
  padding-left: ${(props) => props.theme.paddingSm};
`;
export const CardText = styled.div`
  width: calc(100% - 1rem);
  height: 80%;
  padding: ${(props) => props.theme.paddingSm};
  margin: 0;
`;

export const CardWrapper = styled.div`
  height: 400px;
  width: 80%;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.cardBackground};
  margin: 10px auto;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  &:hover {
    transform: scale(1.05);
    ${CardImage} {
      animation: ${MoveOnHover} 2s forwards;
    }
  }
  cursor: pointer;

  @media screen and (min-width: 600px) {
    width: 400px;
    margin: 10px;
  }
`;
