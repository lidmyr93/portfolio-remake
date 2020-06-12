import React, { useEffect } from "react";
import { useContentful } from "react-contentful";
import { TransitionWrapper } from "../../../styles/page-transition/index";
import {
  PageWrapper,
  ContentWrapper,
  FlexWrapper,
  TextBlock,
} from "../../../styles/general";
import { Markdown } from "../../markdown/Markdown";
import { MarkdownList, FloatingHeader, Portrait } from "./styles";
import Slider from "../../slider/Slider";
import { SliderImage } from "../../slider/styles";
import Spinner from "../../loading/Loading";
import { optimizeContentfulImage } from "../../../Utils/contentfulImage";
const AboutPage = () => {
  const { data, error, fetched, loading } = useContentful({
    contentType: "about",
  });
  if (loading || !fetched) {
    return <Spinner />;
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
          <FlexWrapper justify="space-evenly">
            <Portrait
              src={content.profilePicture.fields.file.url}
              alt={content.profilePicture.fields.file.fileName}
            />
            <TextBlock>{content.text}</TextBlock>
          </FlexWrapper>

          <MarkdownList>
            {content.skills.map((skill, i) => (
              <Markdown content={skill.fields.markdown} type="list" key={i} />
            ))}
          </MarkdownList>
        </ContentWrapper>
        <Slider>
          {content.sliderImages.fields.images.map((image) => (
            <div style={{ position: "relative" }} key={image.fields.title}>
              <SliderImage background={optimizeContentfulImage(image.fields.file.url, 1440, 1000)} />
              <FloatingHeader>{image.fields.description}</FloatingHeader>
            </div>
          ))}
        </Slider>
      </PageWrapper>
    </TransitionWrapper>
  );
};

export default AboutPage;
