import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  color: white;
  background: black;
  opacity: 1;
  z-index: 100000000;
`;

export const ProjectModal = ({ closeModal, data }) => {
  const ref = useRef(null);
  
  const escapeListener = useCallback((e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  const clickListener = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeModal();
      }
    },
    []
  );
  
  useEffect(() => {
    document.addEventListener("click", clickListener);
    document.addEventListener("keyup", escapeListener);

    return () => {
      document.removeEventListener("click", clickListener);
      document.removeEventListener("keyup", escapeListener);
    };
  });

  return (
    <ModalWrapper ref={ref}>
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
