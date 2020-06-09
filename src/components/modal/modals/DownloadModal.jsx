import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../styles/general";
const Test = styled.div`
  position: absolute;
  width: 200px;
  height: 100px;
  background: ${(props) => props.theme.backgroundDark};
  top: ${(props) => `${props.offsetTop}px`};
  left: ${(props) => `${props.offsetLeft + props.width}px`};
  display: flex;
  flex-direction: column;
`;
export const DownloadModal = ({ closeModal, data }) => {
  console.log(data);
  return (
    <Test
      height={data.height}
      width={data.width}
      offsetTop={data.top}
      offsetLeft={data.left}
      onClick={(e) => {
        e.stopPropagation();
        console.log("close");
      }}
    >
      <p onClick={closeModal}>X</p>
      <FlexWrapper>
        <h1>BREV</h1>
        <h1>PB</h1>
      </FlexWrapper>
    </Test>
  );
};
