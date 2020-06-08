import React, {useContext} from "react";
import { ProjectModal } from "./modals/ProjectModal";
import { ModalContext } from "./ModalContext";

const Modals = {
    ProjectModal,
}
const ModalManager = props => {
    const {currentModal, setCurrentModal} = useContext(ModalContext);
    const closeModal = () => setCurrentModal(null);
    
    if(currentModal){
        const ModalComponent = Modals[currentModal.type];

        return <ModalComponent closeModal={closeModal} data={currentModal.data}/>;
    }
    return null;
}

export default ModalManager;