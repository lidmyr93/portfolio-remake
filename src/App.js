import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory
} from "react-router-dom";
import styled from "styled-components";
import HomePage from "./components/pages/home/Home";
import AboutPage from "./components/pages/about/About";
import Menu from "./components/menu/Menu";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: gray;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 100%;
`

export default function App() {
 
  return (
    <Router>
      <AppWrapper>
        <Menu />
        <Route 
          render={({location}) => {
            return (
              <div>
                <TransitionGroup component={null}>
                  <CSSTransition 
                    timeout={300}
                    classNames="page"
                    key={location.key}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={HomePage} />
                      <Route path="/about" component={AboutPage}/>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            )
          }}
        />
      </AppWrapper>
    </Router>
  )
}

