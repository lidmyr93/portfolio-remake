import React from "react";
import { useContentful } from "react-contentful";
import {
  PageWrapper,
  ContentWrapper,
  FlexWrapper,
} from "../../../styles/general";
import { TransitionWrapper } from "../../../styles/page-transition/index";
import { Markdown } from "../../markdown/Markdown";

const HomePage = () => {
  return (
    <TransitionWrapper className="page">
      <PageWrapper>
        <ContentWrapper>
          <FlexWrapper justify="space-between"></FlexWrapper>
        </ContentWrapper>
        <div style={{ background: "purple" }}></div>
      </PageWrapper>
    </TransitionWrapper>
  );
};

export default HomePage;
