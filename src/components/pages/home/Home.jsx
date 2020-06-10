import React, { useContext } from "react";
import { useContentful } from "react-contentful";
import {
  PageWrapper,
  ContentWrapper,
  FlexWrapper,
  FlexWrap,
  Grid,
  VerticalHeader,
} from "../../../styles/general";
import { TransitionWrapper } from "../../../styles/page-transition/index";
import { Markdown } from "../../markdown/Markdown";
import Card from "../../card/Card";
import { ModalContext } from "../../modal/ModalContext";

const HomePage = () => {
  const { setCurrentModal } = useContext(ModalContext);

  const { data, error, fetched, loading } = useContentful({
    contentType: "projects",
    query: {
      limit: 4,
    },
  });
  if (loading || !fetched) {
    return null;
  }
  if (error) {
    console.error(error);
    return null;
  }
  const content = data.items;
  const openModal = (projectData) => {
    setCurrentModal({ type: "ProjectModal", data: projectData });
  };

  return (
    <TransitionWrapper className="page">
      <PageWrapper single>
        <FlexWrapper>
          <Grid columns="auto auto auto" rows="auto">
            <VerticalHeader fontSize="2rem" left bottom alignSelf="flex-end">
              Hello
            </VerticalHeader>
            <Grid
              columns="auto auto"
              rows="auto auto"
              width="auto"
              height="min-content"
            >
              {content.map((card) => (
                <Card content={card} onClick={openModal} />
              ))}
            </Grid>
            <VerticalHeader fontSize="2rem" right top alignSelf="flex-start">
              Latest Projects
            </VerticalHeader>
          </Grid>
        </FlexWrapper>
      </PageWrapper>
    </TransitionWrapper>
  );
};

export default HomePage;
