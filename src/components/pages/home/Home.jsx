import React from "react";
import { useContentful } from "react-contentful";
import {
  PageWrapper,
  ContentWrapper,
  FlexWrapper,
  FlexWrap
} from "../../../styles/general";
import { TransitionWrapper } from "../../../styles/page-transition/index";
import { Markdown } from "../../markdown/Markdown";
import Card from "../../card/Card";

const HomePage = () => {
  const content= [{
    title: "hej",
    text: "loremowkdaodkwaodwaodwaodowakodkaokdsokadoka",
    
  }, 
  {title: "hej",
  text: "loremowkdaodkwaodwaodwaodowakodkaokdsokadoka",
  
}, 
  {title: "hej",
  text: "loremowkdaodkwaodwaodwaodowakodkaokdsokadoka",

}, 
  {title: "hej",
text: "loremowkdaodkwaodwaodwaodowakodkaokdsokadoka",
}];
  
  return (
    <TransitionWrapper className="page">
      <PageWrapper single>
        <FlexWrapper>
      <FlexWrap width="70%">

        {content.map(card => <Card content={card}/>)}
      </FlexWrap>
        </FlexWrapper>
      </PageWrapper>
    </TransitionWrapper>
  );
};

export default HomePage;
