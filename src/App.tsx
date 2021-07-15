import React from "react";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";

const HomePage = loadable(() => import("./pages/HomePage"));

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default App;
