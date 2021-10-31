import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomeContainer from "./home/HomeContainer";
import PollContainer from "./poll/PollContainer";
import NavbarComponent from "./navbar/NavbarComponent";
import FooterComponent from "./footer/FooterComponent";

export default function App() {
  return (
    <Router>
      <NavbarComponent />
      <FooterComponent />
      <Switch>
        <Route path="/create" exact>
          <PollContainer />
        </Route>
        <Route path="/:id">
          <HomeContainer />
        </Route>
        <Route path="/">
          <HomeContainer />
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
}
