import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeContainer from "./home/HomeContainer";
import PollContainer from "./poll/PollContainer";
import NavbarComponent from "./navbar/NavbarComponent";
import FooterComponent from "./footer/FooterComponent";

export default function App() {
  return (
    <Router>
      <NavbarComponent />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact>
          <HomeContainer />
        </Route>
        <Route path="/create" exact>
          <PollContainer />
        </Route>
      </Switch>
      <FooterComponent />
    </Router>
  );
}
