import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import NotFoundPage from "../../components/NotFoundPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
