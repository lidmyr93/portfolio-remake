import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ContentfulClient, ContentfulProvider } from "react-contentful";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import HomePage from "./components/pages/home/Home";
import AboutPage from "./components/pages/about/About";
import Menu from "./components/menu/Menu";
import { localTheme, breakpoints } from "./theme/theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faMale,
  faCog,
  faEnvelope,
  faSignature,
  faPhone,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import ContactPage from "./components/pages/contact/Contact";
import ProjectsPage from "./components/pages/projects/Projects";
import { ModalContextProvider } from "./components/modal/ModalContext";
import ModalManager from "./components/modal/ModalController";
library.add(
  faHome,
  faMale,
  faCog,
  faEnvelope,
  faLinkedin,
  faGithub,
  faSignature,
  faPhone,
  faComment
);

const AppWrapper = styled.div`
  background: ${(props) => props.theme.backgroundLight};
  height: 100vh;
  max-width: 100vw;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 60px;
  overflow-y: hidden;
  @media screen and (min-width: 600px) {
    grid-template-columns: 100px 1fr;
    grid-template-rows: 100%;
    overflow: hidden;
  }
`;
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`;
const contentfulClient = new ContentfulClient({
  accessToken: "rEfxUOCakqjgvhGSYtGs6ONNU1OoSMj82Z9QtbRPxxM",
  space: "nj3jg45os9hx",
});

export default function App() {
  return (
    <ThemeProvider theme={localTheme}>
      <ContentfulProvider client={contentfulClient}>
        <GlobalStyle />
        <ModalContextProvider>
          <ModalManager />
          <Router>
            <AppWrapper>
              <Menu />
              <Route
                render={({ location }) => {
                  return (
                    <div>
                      <TransitionGroup component={null}>
                        <CSSTransition
                          timeout={1000}
                          classNames="page"
                          key={location.key}
                        >
                          <Switch location={location}>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/contact" component={ContactPage} />
                            <Route path="/projects" component={ProjectsPage} />
                          </Switch>
                        </CSSTransition>
                      </TransitionGroup>
                    </div>
                  );
                }}
              />
            </AppWrapper>
          </Router>
        </ModalContextProvider>
      </ContentfulProvider>
    </ThemeProvider>
  );
}
