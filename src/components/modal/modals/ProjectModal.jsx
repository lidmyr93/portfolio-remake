import React, { useRef, useEffect, useCallback } from "react";

import {
  ModalWrapper,
  CloseModalButton,
  ModalImage,
  StyledExternalLink,
  HeaderWrapper,
  TextWrapper,
  LowerProjectWrapper,
  LinkWrapper,
} from "./projectmodal.styles";
import { optimizeContentfulImage } from "../../../Utils/contentfulImage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexWrapper } from "../../../styles/general";

export const ProjectModal = ({ closeModal, data }) => {
  const ref = useRef(null);
  console.log("test", data.fields);
  const escapeListener = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  const clickListener = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("click", clickListener);
    document.addEventListener("keyup", escapeListener);

    return () => {
      document.removeEventListener("click", clickListener);
      document.removeEventListener("keyup", escapeListener);
    };
  });

  return (
    <ModalWrapper ref={ref}>
      <CloseModalButton onClick={closeModal}>
        <FontAwesomeIcon icon={["fas", "times-circle"]} />
      </CloseModalButton>
      <ModalImage
        background={optimizeContentfulImage(
          data.picture.fields.file.url,
          800,
          400
        )}
      />

      <HeaderWrapper>
        <h1>{data.title}</h1>
      </HeaderWrapper>

      <LowerProjectWrapper>
        <TextWrapper>{data.text}</TextWrapper>

        <FlexWrapper>
          <LinkWrapper>
            <FlexWrapper>
              <StyledExternalLink
                href={data.webpage ? data.webpage : null}
                target="blank"
              >
                <FontAwesomeIcon icon={["fas", "globe"]} />
              </StyledExternalLink>
              {data.webpage ? (
                <FontAwesomeIcon
                  icon={["fas", "check-circle"]}
                  style={{ color: "green", paddingLeft: "5px" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={["fas", "exclamation-triangle"]}
                  style={{ color: "red", paddingLeft: "5px" }}
                />
              )}
            </FlexWrapper>
            <FlexWrapper>
              <StyledExternalLink
                href={data.github ? data.github : null}
                target="blank"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </StyledExternalLink>
              {data.github ? (
                <FontAwesomeIcon
                  icon={["fas", "check-circle"]}
                  style={{ color: "green", paddingLeft: "5px" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={["fas", "exclamation-triangle"]}
                  style={{ color: "red", paddingLeft: "5px" }}
                />
              )}
            </FlexWrapper>
          </LinkWrapper>
        </FlexWrapper>
      </LowerProjectWrapper>
    </ModalWrapper>
  );
};
