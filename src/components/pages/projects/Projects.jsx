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

const ProjectsPage = () => {
  const { data, error, fetched, loading } = useContentful({
    contentType: "projects",
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
  console.log(data);
  return (
    <TransitionWrapper>
      <PageWrapper>
        <h1>projects</h1>
      </PageWrapper>
    </TransitionWrapper>
  );
};

export default ProjectsPage;
