import React, { useContext, useRef, useCallback, useEffect } from "react";
import { ProjectModal } from "./modals/ProjectModal";
import { DownloadModal } from "./modals/DownloadModal";
import styled from "styled-components";
import { ModalContext } from "./ModalContext";

const Modals = {
  ProjectModal,
  DownloadModal,
};
const ModalView = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 100000;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalManager = (props) => {
  const { currentModal, setCurrentModal } = useContext(ModalContext);
  const closeModal = () => setCurrentModal(null);

  if (currentModal) {
    const ModalComponent = Modals[currentModal.type];

    return (
      <ModalView>
        <ModalComponent
          closeModal={closeModal}
          data={currentModal.data}
          
        />
      </ModalView>
    );
  }
  return null;
};

export default ModalManager;
