import React, { useReducer } from "react";
import { PageWrapper, FlexWrapper, Button } from "../../../styles/general";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledIcon,
  StyledTextArea,
} from "./styles";

const ContactPage = () => {
  const [emailData, setEmailData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      to: "magnus.lidmyr@gmail.com",
      from: "",

      message: "",
      email: "",
      number: "",
    }
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ [name]: value });
  };
  return (
    <PageWrapper single>
      <FlexWrapper>
        <StyledForm>
          <StyledLabel>
            <StyledIcon icon={["fa", "signature"]} />
            <StyledInput
              type="text"
              onChange={(e) => handleChange(e)}
              placeholder="name"
              name="from"
            />
          </StyledLabel>

          <StyledLabel>
            <StyledIcon icon={["fas", "envelope"]} />
            <StyledInput
              type="text"
              onChange={(e) => handleChange(e)}
              placeholder="Email"
              name="email"
            />
          </StyledLabel>
          <StyledLabel>
            <StyledIcon icon={["fas", "phone"]} />
            <StyledInput
              type="text"
              onChange={(e) => handleChange(e)}
              placeholder="Number"
              name="number"
            />
          </StyledLabel>
          <StyledLabel>
            <StyledIcon icon={["fas", "comment"]} />
            <StyledTextArea
              type="text"
              name="message"
              onChange={(e) => handleChange(e)}
            />
          </StyledLabel>
          <Button width="150px" height="30px">
            Send
          </Button>
        </StyledForm>
      </FlexWrapper>
    </PageWrapper>
  );
};
export default ContactPage;
