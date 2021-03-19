import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import RecipeInfoPage from "./pages/RecipeInfoPage";
import TopNav from "./components/navigation/TopNav";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TopNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes/:recipeId" component={RecipeInfoPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
