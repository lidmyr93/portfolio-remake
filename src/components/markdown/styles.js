import styled, { css } from "styled-components";

export const TypeWrapper = styled.div`
  ${(props) => props.type === "list" && `${ListWrapper}`};
  ${(props) => props.type === "card" && `${CardStyles}`};
`;
const ListWrapper = css`
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

const CardStyles = css`
  p {
    margin: 0;
  }
`;
