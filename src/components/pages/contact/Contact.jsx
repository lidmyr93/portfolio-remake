import React, { useReducer, useState } from "react";
import { PageWrapper, FlexWrapper, Button } from "../../../styles/general";
import axios from "axios";
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
  const [mailSent, setMailSent] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://europe-west1-portfolio-remake.cloudfunctions.net/submitEurope";
    axios
      .post(url, emailData)
      .then((res) => {
        if (res.status === 200) {
          return setMailSent(true);
        } else {
          throw new Error("Something went wrong with the email service");
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
              placeholder="Name"
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
            <StyledIcon icon={["fas", "comment"]} textarea />
            <StyledTextArea
              type="text"
              name="message"
              placeholder="Message..."
              onChange={(e) => handleChange(e)}
            />
          </StyledLabel>
          <Button
            width="150px"
            height="30px"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Send
          </Button>
        </StyledForm>
      </FlexWrapper>
    </PageWrapper>
  );
};
export default ContactPage;
