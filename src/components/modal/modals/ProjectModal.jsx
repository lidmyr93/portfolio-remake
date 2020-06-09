import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  color: white;
  background: black;
  opacity: 1;
  z-index: 100000000;
`;

export const ProjectModal = ({ closeModal, data }) => {
  return (
    <ModalWrapper>
      <p onClick={closeModal}>X</p>
      <h1>{data.fields.project}</h1>
    </ModalWrapper>
  );
};
