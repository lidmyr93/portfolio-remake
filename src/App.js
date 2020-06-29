import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ContentfulClient, ContentfulProvider } from "react-contentful";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import HomePage from "./components/pages/home/Home";
import AboutPage from "./components/pages/about/About";
import Menu from "./components/menu/Menu";
import { I18Provider, LOCALES } from "./i18n";
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
  faBars,
  faCheckCircle,
  faExclamationTriangle,
  faGlobe,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import ContactPage from "./components/pages/contact/Contact";
import ProjectsPage from "./components/pages/projects/Projects";
import { ModalContextProvider } from "./components/modal/ModalContext";
import ModalManager from "./components/modal/ModalController";
import MobileMenu from "./components/menu/MobileMenu";
require("typeface-alegreya-sans");
require("dotenv").config();

library.add(
  faHome,
  faMale,
  faCog,
  faEnvelope,
  faLinkedin,
  faGithub,
  faSignature,
  faPhone,
  faComment,
  faBars,
  faCheckCircle,
  faExclamationTriangle,
  faGlobe,
  faTimesCircle
);

const AppWrapper = styled.div`
  background: ${(props) => props.theme.backgroundLight};
  height: 100vh;
  max-width: 100vw;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  overflow: hidden;
  position: relative;
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
    font-family: 'Alegreya Sans', sans-serif;
  }
`;
const contentfulClient = new ContentfulClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY,
  space: process.env.REACT_APP_CONTENTFUL_API_SPACE,
});

export default function App() {
  const [locale, setLocale] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("locale")) {
      localStorage.setItem("locale", "en");
      setLocale("en");
    }
    setLocale(localStorage.getItem("locale"));
  }, [locale]);

  //need to rework entire localehandling with contentful
  //to minimize duplicate localehandlers with react intl added
  const populateLocal = (locale) => {
    if (locale === "sv-SE") {
      return LOCALES.SWEDISH;
    }
    return LOCALES.ENGLISH;
  };
  return (
    locale && (
      <I18Provider locale={populateLocal(locale)}>
        <ThemeProvider theme={localTheme}>
          <ContentfulProvider client={contentfulClient}>
            <GlobalStyle />
            <ModalContextProvider>
              <ModalManager />
              <Router>
                <AppWrapper>
                  <Menu setLocale={setLocale} />
                  <MobileMenu />
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
                                <Route
                                  exact
                                  path="/"
                                  render={() => <HomePage locale={locale} />}
                                />
                                <Route
                                  path="/about"
                                  render={() => <AboutPage locale={locale} />}
                                />
                                <Route
                                  path="/contact"
                                  render={() => <ContactPage locale={locale} />}
                                />
                                <Route
                                  path="/projects"
                                  render={() => (
                                    <ProjectsPage locale={locale} />
                                  )}
                                />
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
      </I18Provider>
    )
  );
}
