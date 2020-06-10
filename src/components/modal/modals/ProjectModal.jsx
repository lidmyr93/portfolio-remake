import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  color: white;
  background: black;
  opacity: 1;
  z-index: 100000000;
`;

export const ProjectModal = ({ closeModal, data }) => {
  console.log("modal", data);
  /* 
    github,
    picture,
    project,
    text,
    title,
    webpage,
  */
  return (
    <ModalWrapper>
      <p onClick={closeModal}>X</p>
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <img
        src={`https:${data.picture.fields.file.url}`}
        alt="hej"
        style={{ width: "500px", height: "500px" }}
      />
    </ModalWrapper>
  );
};
