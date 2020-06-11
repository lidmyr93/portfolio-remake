import React, { useRef, useEffect, useCallback } from "react";

import {ModalWrapper, CloseModalButton, ModalImage} from "./projectmodal.styles"
import { optimizeContentfulImage } from "../../../Utils/contentfulImage";


export const ProjectModal = ({ closeModal, data }) => {
  const ref = useRef(null);
  
  const escapeListener = useCallback((e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  },
  [closeModal]
  );

  const clickListener = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeModal();
      }
    },
    [closeModal]
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
      <CloseModalButton onClick={closeModal}>X</CloseModalButton>
      <ModalImage background={optimizeContentfulImage(data.picture.fields.file.url, 800, 400)} />
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      
    </ModalWrapper>
  );
};
