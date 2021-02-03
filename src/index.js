import React from "react";
import ReactDOM from "react-dom";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bar from "./Pages/Bar";
import Menu from "./Pages/Menu";
import Team from "./Pages/Team";
import Reservations from "./Pages/Reservations";

ReactDOM.render(
  <Router>
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Bar" component={Bar} />
        <Route exact path="/Menu" component={Menu} />
        <Route exact path="/Team" component={Team} />
        <Route exact path="/Reservations" component={Reservations} />
      </Switch>
    </>
  </Router>,
  document.getElementById("root")
);
