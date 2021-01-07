import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Home from "../views/Home";
import Contact from "../views/Contact";

const Router = () => {
  return (
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.contact} component={Contact} />
    </Switch>
  );
};

export default Router;
