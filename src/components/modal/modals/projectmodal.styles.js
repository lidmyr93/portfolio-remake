import styled from "styled-components";


export const ModalWrapper = styled.div`
color: white;
background: black;
opacity: 1;
z-index: 100000000;
height: 80vh;
width: 50vw;
position: relative;
`;

export const CloseModalButton = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    background: rgba(0,0,0,0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 5px;
    top: 5px;
`;

export const ModalImage = styled.div`
    background: ${props => props.background && `url(${props.background})`};
    height: 400px;
    width: 100%;
    background-position: center;
    background-position: cover;
`;