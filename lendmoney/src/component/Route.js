import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loaner from "./Loaner"; // or whatever the location is
import Debtor from "./Debtor"; // or whatever the location is
import Login from "./Login"
export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/currency" component={Debtor} />
    </Switch>
  </BrowserRouter>
);
