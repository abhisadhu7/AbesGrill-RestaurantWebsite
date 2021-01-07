import React from "react";
import ReactDOM from "react-dom";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bar from "./Pages/Bar";
import Menu from "./Pages/Menu";
import Team from "./Pages/Team";
import PrivateDining from "./Pages/PrivateDining";
import Journal from "./Pages/Journal";
import Happenings from "./Pages/Happenings";

ReactDOM.render(
  <Router>
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Bar" component={Bar} />
        <Route exact path="/Menu" component={Menu} />
        <Route exact path="/Team" component={Team} />
        <Route exact path="/PrivateDining" component={PrivateDining} />
        <Route exact path="/Journal" component={Journal} />
        <Route exact path="/Happenings" component={Happenings} />
      </Switch>
    </>
  </Router>,
  document.getElementById("root")
);
