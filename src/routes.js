import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Cadastro from "./pages/SignUp";
import Newcard from "./pages/NewCard";
import Portfolio from "./pages/Portfolio";
import EditPortfolio from "./pages/editportfolio";
import ListCards from "./pages/ListCards";

import Header from "./pages/components/Header";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Cadastro} />
        <Route path="/newcard" component={Newcard} />
        <Route path="/portfolio" component={Portfolio} />~
        <Route path="/editportfolio" component={EditPortfolio} />
        <Route path="/cards/tipo" component={ListCards} />
      </Switch>
    </BrowserRouter>
  );
}
