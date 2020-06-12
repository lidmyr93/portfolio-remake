import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 4px solid grey;
  border-right: 4px solid ${props => props.theme.menuText};
  border-bottom: 4px solid grey;
  border-left: 4px solid ${props => props.theme.menuText};
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: ${props => props.position || "absolute"};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Spinner;