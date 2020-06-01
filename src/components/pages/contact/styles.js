import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const StyledForm = styled.form`
  height: auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  padding: 2rem 0;
  background: ${(props) => props.theme.linearGradient};
`;
export const StyledInput = styled.input`
  width: 85%;
  height: 2rem;
`;

export const StyledLabel = styled.label`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem 0;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.menuText};
  font-size: 1.5rem;
`;

export const StyledTextArea = styled.textarea`
  width: 85%;
  height: 200px;
  resize: vertical;
`;
