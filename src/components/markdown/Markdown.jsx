import React from "react";
import ReactMarkdown from "react-markdown";
import { TypeWrapper } from "./styles";
export const Markdown = ({ content, type }) => {
  return (
    <TypeWrapper type={type}>
      <ReactMarkdown source={content} />
    </TypeWrapper>
  );
};
