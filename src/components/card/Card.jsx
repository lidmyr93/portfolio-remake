import React from "react";

import { CardWrapper, CardImage, CardTitle, CardText } from "./styles";
import { FlexWrapper } from "../../styles/general";
import { Markdown } from "../markdown/Markdown";

const Card = ({ content, onClick }) => {
  
  return (
    <CardWrapper onClick={() => onClick(content)}>
      <CardImage
        background={`https:${content.fields.picture.fields.file.url}?w=400&h=300`}
      />

      <FlexWrapper column justify="flex-start" style={{ height: "60%" }}>
        <CardTitle>{content.fields.title}</CardTitle>
        <CardText>
          <Markdown content={content.fields.text} type="card" />
        </CardText>
      </FlexWrapper>
    </CardWrapper>
  );
};

export default Card;
