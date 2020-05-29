import styled, { css } from "styled-components";

export const TypeWrapper = styled.div`
  ${(props) => console.log(props.type)}
  ${(props) => props.type === "list" && `${ListWrapper}`};
`;
export const ListWrapper = css`
  h1,
  h2,
  h3 {
    border-bottom: 1px solid #8f1c1c;
  }
  ul,
  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;
