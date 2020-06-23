import React from "react";
import Spinner from "../../loading/Loading";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import translate from "../../../i18n/messages/translate";

const InfoWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  color: ${(props) => props.color || "green"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  flex-direction: column;
  p {
    width: 50%;
    text-align: center;
  }
`;
export const MailStatus = ({ status, clearWhenEmailSuccess }) => {
  if (status === "success") {
    setTimeout(() => {
      clearWhenEmailSuccess();
    }, 3000);
  }
  switch (status) {
    case "success":
      return (
        <InfoWrapper color="green">
          <FontAwesomeIcon icon={["fas", "check-circle"]} />
          <p>{translate("thanks")}</p>
        </InfoWrapper>
      );

    case "failure":
      return (
        <InfoWrapper color="red">
          <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />
          <p>{translate("error")}</p>
        </InfoWrapper>
      );

    case "pending":
      return (
        <InfoWrapper>
          <Spinner position="initial" />
        </InfoWrapper>
      );
    default:
      return null;
  }
};
