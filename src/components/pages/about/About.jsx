import React, { useEffect } from "react";
import { useContentful } from "react-contentful";
import { TransitionWrapper } from "../../../styles/page-transition/index";
import {
  PageWrapper,
  ContentWrapper,
  FlexWrapper,
} from "../../../styles/general";
import { Markdown } from "../../markdown/Markdown";
import { MarkdownList } from "./styles";
const AboutPage = () => {
  const { data, error, fetched, loading } = useContentful({
    contentType: "about",
  });
  if (loading || !fetched) {
    return null;
  }
  if (error) {
    console.error(error);
    return null;
  }
  if (!data) {
    return <p>Page does not exist</p>;
  }
  const content = data && data.items && data.items[0].fields;

  return (
    <TransitionWrapper className="page">
      <PageWrapper>
        <ContentWrapper>
          <FlexWrapper justify="space-between">
            <img
              src={content.profilePicture.fields.file.url}
              alt={content.profilePicture.fields.file.fileName}
            />
            <div>{content.text}</div>
          </FlexWrapper>

          <MarkdownList>
            {content.skills.map((skill) => (
              <Markdown content={skill.fields.markdown} type="list" />
            ))}
          </MarkdownList>
        </ContentWrapper>
        <div style={{ background: "purple" }}></div>
      </PageWrapper>
    </TransitionWrapper>
  );
};

export default AboutPage;
