import React from "react";
import styled from "styled-components";
import { getLocale } from "../../Utils/localehandler";

const StyledFlag = styled.img`
  margin: 5px;
  filter: ${(props) => (props.selected ? "grayscale(0)" : "grayscale(1)")};
  cursor: pointer;
`;
export const LanguageFlag = ({ setLocale, saveLocale, langCode }) => {
  const langCodeToCountryFlag = {
    sv: "se",
    en: "gb",
  };
  /*  const x = getLocale().substring(0, 2);
  console.log(x);
  console.log(langCode); */
  return (
    <StyledFlag
      src={`https://www.countryflags.io/${langCodeToCountryFlag[langCode]}/shiny/32.png`}
      alt="SWE"
      selected={langCode === getLocale().substring(0, 2) ? true : false}
      onClick={() => {
        setLocale(langCode);
        saveLocale(langCode);
      }}
    />
  );
};
