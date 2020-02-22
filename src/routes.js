import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Cadastro from "./pages/SignUp";
import Newcard from "./pages/NewCard";
import Portfolio from "./pages/Portfolio";
import EditPortfolio from "./pages/editportfolio";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Cadastro} />
        <Route path="/newcard" component={Newcard} />
        <Route path="/portfolio" component={Portfolio} />~
        <Route path="/editportfolio" component={EditPortfolio} />
      </Switch>
    </BrowserRouter>
  );
}
