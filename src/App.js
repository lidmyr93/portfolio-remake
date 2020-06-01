import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ContentfulClient, ContentfulProvider } from "react-contentful";
import styled, { ThemeProvider } from "styled-components";
import HomePage from "./components/pages/home/Home";
import AboutPage from "./components/pages/about/About";
import Menu from "./components/menu/Menu";
import { localTheme } from "./theme/theme";
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
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.backgroundLight};
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const contentfulClient = new ContentfulClient({
  accessToken: "rEfxUOCakqjgvhGSYtGs6ONNU1OoSMj82Z9QtbRPxxM",
  space: "nj3jg45os9hx",
});

export default function App() {
  return (
    <ThemeProvider theme={localTheme}>
      <ContentfulProvider client={contentfulClient}>
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
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
                  </div>
                );
              }}
            />
          </AppWrapper>
        </Router>
      </ContentfulProvider>
    </ThemeProvider>
  );
}
