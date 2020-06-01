import styled from "styled-components";

export const MarkdownList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

export const FloatingHeader = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: ${(props) => props.theme.color};
`;

export const Portrait = styled.img`
  width: 200px;
  height: auto;
  align-self: flex-start;
`;
