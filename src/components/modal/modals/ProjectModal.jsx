import React from "react";
import styled from "styled-components";

const ModalView = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 100000;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
    color: white;
    background: black;
    opacity: 1;
    z-index: 100000000;
    
`;

export const ProjectModal = ({ closeModal, data }) => {
  
  return (
    <ModalView onClick={(e) =>{e.stopPropagation(); console.log('close')}}>
      <ModalWrapper>
        <p onClick={closeModal}>X</p>
        <h1>{data.fields.project}</h1>
      </ModalWrapper>
    </ModalView>
  );
};
