import React, { useContext } from "react";
import { useContentful } from "react-contentful";
import {
  PageWrapper,
  FlexWrapper,
  Grid,
  VerticalHeader,
  RelativeWrapper,
} from "../../../styles/general";
import { TransitionWrapper } from "../../../styles/page-transition/index";

import Card from "../../card/Card";
import { ModalContext } from "../../modal/ModalContext";
import Spinner from "../../loading/Loading";
import { getLocale } from "../../../Utils/localehandler";
import translate from "../../../i18n/messages/translate";
const HomePage = ({ locale }) => {
  const { setCurrentModal } = useContext(ModalContext);
  const { data, error, fetched, loading } = useContentful({
    contentType: "projects",
    query: {
      limit: 4,
      locale: getLocale(),
    },
  });

  if (loading || !fetched) {
    return <Spinner />;
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
            <RelativeWrapper align="flex-end">
              <VerticalHeader fontSize="2rem" left bottom alignSelf="flex-end">
                {translate("greeting")}
              </VerticalHeader>
            </RelativeWrapper>
            <Grid
              columns="auto auto"
              rows="auto auto"
              width="auto"
              height="min-content"
            >
              {content.map((card) => (
                <Card
                  content={card}
                  onClick={openModal}
                  key={card.fields.project}
                />
              ))}
            </Grid>
            <RelativeWrapper align="flex-start">
              <VerticalHeader fontSize="2rem" right top alignSelf="flex-start">
                <FlexWrapper>
                  <div style={{ marginRight: "5px" }}>
                    {translate("latest")}
                  </div>

                  <div>{translate("projects")}</div>
                </FlexWrapper>
              </VerticalHeader>
            </RelativeWrapper>
          </Grid>
        </FlexWrapper>
      </PageWrapper>
    </TransitionWrapper>
  );
};

export default HomePage;
