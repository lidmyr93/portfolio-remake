import React from "react";

import { CardWrapper , CardImage, CardTitle, CardText} from "./styles";
import { FlexWrapper } from "../../styles/general";
import { Markdown } from "../markdown/Markdown";

const Card = ({ content }) => {
  return (
    <CardWrapper>
      <CardImage />

      <FlexWrapper column justify="flex-start"style={{height: "60%"}}>
          <CardTitle>{content.title}</CardTitle>
          <CardText><Markdown content={content.text} /></CardText>
      </FlexWrapper>
    </CardWrapper>
  );
};

export default Card;
