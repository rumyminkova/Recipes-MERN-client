import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import RecipeInfoPage from "./pages/RecipeInfoPage";
import RecipesSearchPage from "./pages/RecipesSearchPage";
import MealPlanPage from "./pages/MealPlanPage";
import RecipesNutrients from "./pages/RecipesNutrientsPage";
import SideBar from "./components/navigation/SideBar";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes/search" exact component={RecipesSearchPage} />
          <Route path="/recipes/mealplan" exact component={MealPlanPage} />
          <Route path="/recipes/nutrients" exact component={RecipesNutrients} />
          <Route path="/recipes/:recipeId" exact component={RecipeInfoPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
