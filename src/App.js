import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import RecipeInfoPage from "./pages/RecipeInfoPage";
import RecipesSearchPage from "./pages/RecipesSearchPage";
import SideBar from "./components/navigation/SideBar";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes/search" component={RecipesSearchPage} />
          <Route path="/recipes/:recipeId" component={RecipeInfoPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
