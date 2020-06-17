import React from "react";

import { CardWrapper, CardImage, CardTitle, CardText } from "./styles";
import { FlexWrapper } from "../../styles/general";
import { Markdown } from "../markdown/Markdown";
import { optimizeContentfulImage } from "../../Utils/contentfulImage";
import { truncate } from "../../Utils/truncate";

const Card = ({ content, onClick }) => {
  
  return (
    <CardWrapper onClick={() => onClick(content.fields)}>
      <CardImage
        background={optimizeContentfulImage(content.fields.picture.fields.file.url, 400, 200)}
      />

      <FlexWrapper column justify="flex-start" style={{ height: "40%" }}>
        <CardTitle>{content.fields.title}</CardTitle>
        <CardText>
          <Markdown content={truncate(content.fields.text, 200)} type="card" />
        </CardText>
      </FlexWrapper>
    </CardWrapper>
  );
};

export default Card;
