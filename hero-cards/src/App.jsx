import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HeroApp from "./HeroApp";
// reach router
export default function App() {
  return (
    <BrowserRouter>
      <Redirect to="/heros" />

      <Switch>
        <Route path="/heros">
          <HeroApp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
