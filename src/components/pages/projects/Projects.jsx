import React, { useContext } from "react";
import { useContentful } from "react-contentful";
import { TransitionWrapper } from "../../../styles/page-transition/index";
import { PageWrapper, FlexWrapper } from "../../../styles/general";

import { GridContainer, Item } from "./styles";
import { ModalContext } from "../../modal/ModalContext";
import { optimizeContentfulImage } from "../../../Utils/contentfulImage";

const ProjectsPage = () => {
  const { setCurrentModal } = useContext(ModalContext);
  const openModal = (projectData) => {
    setCurrentModal({ type: "ProjectModal", data: projectData });
  };
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

  const imageResize = (url, weight) => {
    let size = {};
    if(weight === 1) {
      size.height = 400;
      size.width = 600;
    }
    if(weight === 2){
      size.height = 400;
      size.width = 900;
    }
    return optimizeContentfulImage(url, size.width, size.height)
  }
  return (
    <TransitionWrapper>
      <PageWrapper single overflowY="auto">
        <FlexWrapper>
          <GridContainer>
            {data.items.map((item) => (
              <Item
                weight={item.fields.weight}
                background={imageResize(item.fields.picture.fields.file.url, item.fields.weight)}
                className={item.fields.weight === 1 ? "medium" : "big"}
                size={item.fields.weight}
                onClick={() => openModal(item.fields)}
              />
            ))}
          </GridContainer>
        </FlexWrapper>
      </PageWrapper>
    </TransitionWrapper>
  );
};

export default ProjectsPage;
