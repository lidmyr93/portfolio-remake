import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollBar } from "../../../styles/general";
export const StyledForm = styled.form`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  background: ${(props) => props.theme.linearGradient};
  width: 300px;
  padding: 1rem 0.5rem;
  margin: 0 auto;
  position: relative;
  @media screen and (min-width: 450px) {
    width: 350px;
    padding: 2rem 2rem;
  }
  @media screen and (min-width: 600px) {
    width: 400px;
  }
  @media screen and (min-width: 1000px) {
    width: 600px;
    padding: 3rem 3rem;
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  padding-left: 2.5rem;
  border: ${props => props.validation && "3px solid green"};
  border: ${props => !props.validation && "3px solid red"};
  border: ${props => (props.validation === undefined || props.validation === null) && "0px"};
  @media screen and (min-width: 450px) {
    padding-left: 1rem;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: auto;
  margin: 0 0 1rem 0;
  position: relative;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.menuText};
  font-size: 1.5rem;
  position: absolute;
  left: 5px;
  align-self: center;
  display: ${(props) => props.textarea && "none"};
  @media screen and (min-width: 450px) {
    left: -35px;
    display: ${(props) => props.textarea && "initial"};
  }
`;

export const StyledTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 200px;
  padding: 0.5rem;
  overflow: auto;
  ${ScrollBar};
  border: ${props => props.validation && "3px solid green"};
  border: ${props => !props.validation && "3px solid red"};
  border: ${props => (props.validation === undefined || props.validation === null) && "0px"};
  @media screen and (min-width: 600px) {
    padding: 1rem;
  }
`;
