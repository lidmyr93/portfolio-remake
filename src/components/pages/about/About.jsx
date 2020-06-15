import React from "react";
import { useContentful } from "react-contentful";
import { TransitionWrapper } from "../../../styles/page-transition/index";
import {
  PageWrapper,
  ContentWrapper,
  FlexWrapper,
  TextBlock,
} from "../../../styles/general";
import { Markdown } from "../../markdown/Markdown";
import {
  MarkdownList,
  FloatingHeader,
  Portrait,
  Paper,
  Pattern,
  PaperContent,
  PostIt,
  StyledFigure,
  StyledSlider,
  SliderWrapper,
} from "./styles";
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
  const randomPostItStyle = () => {
    const colors = ["#FBE364", "#F4B416", "#7afcff"];
    const rotation = [4, -4, 0];
    const index = Math.floor(Math.random() * 3);
    let x = { color: colors[index], rotate: rotation[index] };
    return x;
  };
  return (
    <TransitionWrapper className="page">
      <PageWrapper>
        <ContentWrapper>
          
            <Paper>
              <Pattern>
                <StyledFigure>
                  <Portrait
                    src={content.profilePicture.fields.file.url}
                    alt={content.profilePicture.fields.file.fileName}
                  />
                  <figcaption>
                    <PaperContent>{content.text}</PaperContent>
                  </figcaption>
                </StyledFigure>
              </Pattern>
            </Paper>
          

          <MarkdownList>
            {content.skills.map((skill, i) => (
              <PostIt randomstyle={randomPostItStyle()}>
                <h1>{skill.fields.title}</h1>
                <Markdown content={skill.fields.markdown} type="card" key={i} />
              </PostIt>
            ))}
          </MarkdownList>
        </ContentWrapper>
        
          <Slider>
            {content.sliderImages.fields.images.map((image) => (
              <div style={{ position: "relative" }} key={image.fields.title}>
                <SliderImage
                  background={optimizeContentfulImage(
                    image.fields.file.url,
                    1440,
                    1000
                  )}
                />
                <FloatingHeader>{image.fields.description}</FloatingHeader>
              </div>
            ))}
          </Slider>
        
      </PageWrapper>
    </TransitionWrapper>
  );
};

export default AboutPage;
