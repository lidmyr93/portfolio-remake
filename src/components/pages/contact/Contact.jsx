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
import { MailStatus } from "./mailstatus";
import {
  simpleTextValidation,
  simpleEmailValidation,
} from "../../../Utils/validation";

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
  const [validationCheck, setValidationCheck] = useState({
    from: null,
    message: null,
    email: null,
  });
  const handleInputVerification = (name, value) => {
    switch (name) {
      case "from":
        setValidationCheck({
          ...validationCheck,
          from: simpleTextValidation(value, 2, 40),
        });

        break;
      case "email":
        setValidationCheck({
          ...validationCheck,
          email: simpleEmailValidation(value),
        });
        break;
      case "number":
        //will be ignored optional

        break;
      case "message":
        setValidationCheck({
          ...validationCheck,
          message: simpleTextValidation(value, 2, Infinity),
        });
        break;
      default:
        return null;
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    handleInputVerification(name, value);
    setEmailData({ [name]: value });
  };

  const clearWhenEmailSuccess = () => {
    setEmailData({
      ...emailData,
      from: "",
      message: "",
      email: "",
      number: "",
    });
    setMailSent(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMailSent("pending");
    const url =
      "https://europe-west1-portfolio-remake.cloudfunctions.net/submitEurope";
    axios
      .post(url, emailData)
      .then((res) => {
        if (res.status === 200) {
          return setMailSent("success");
        } else {
          setMailSent("failure");
          throw new Error("Something went wrong with the email service");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const check = () => {
    if (
      validationCheck.from &&
      validationCheck.email &&
      validationCheck.message
    ) {
      return true;
    }
    return false;
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
              validation={validationCheck && validationCheck.from}
            />
          </StyledLabel>

          <StyledLabel>
            <StyledIcon icon={["fas", "envelope"]} />
            <StyledInput
              type="text"
              onChange={(e) => handleChange(e)}
              placeholder="Email"
              name="email"
              validation={validationCheck && validationCheck.email}
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
              validation={validationCheck && validationCheck.message}
            />
          </StyledLabel>

          <Button
            width="150px"
            height="30px"
            type="submit"
            onClick={(e) => handleSubmit(e)}
            disabled={!check()}
            disabledStyle={check()}
          >
            Send
          </Button>
          {mailSent && (
            <MailStatus
              status={mailSent}
              clearWhenEmailSuccess={clearWhenEmailSuccess}
            />
          )}
        </StyledForm>
      </FlexWrapper>
    </PageWrapper>
  );
};
export default ContactPage;
