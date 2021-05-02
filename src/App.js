import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";

import { ImSpoonKnife } from "react-icons/im";

import Home from "./pages/Home";
import RecipeInfoPage from "./pages/RecipeInfoPage";
import MyRecipesPage from "./pages/MyRecipesPage";
import RecipesSearchPage from "./pages/RecipesSearchPage";
import MealPlanPage from "./pages/MealPlanPage";
import RecipesNutrients from "./pages/RecipesNutrientsPage";
import SideBar from "./components/navigation/SideBar";
import Auth from "./components/auth/Auth";
import ErrorNotification from "./components/ErrorNotification";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-bg">
          <div className="p-3 text-bold">
            <span className="text-dark unsplash-text">
              Photo by{" "}
              <a href="https://unsplash.com/@ellaolsson?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Ella Olsson
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/s/photos/cutting-board?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
          </div>
          <div className="text-center text-md-right preloader-banner">
            <div className="d-flex justify-content-center justify-content-md-end align-items-center mb-5 mr-0 pr-0 mr-md-5 pr-md-5">
              <ClockLoader color="#ffaf2a" loading={loading} size={100} />
            </div>
            <p className="special-font preloader-font">
              <ImSpoonKnife className="preloader-icon mr-3" />
              Recipes
            </p>
            <h1 className="mb-5 preloader-text__2">your digital Cookbook</h1>
          </div>
        </div>
      ) : (
        <div className="main-container">
          <BrowserRouter>
            <SideBar />
            <ErrorNotification />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/recipes/search"
                exact
                component={RecipesSearchPage}
              />
              <Route path="/recipes/mealplan" exact component={MealPlanPage} />
              <Route
                path="/recipes/nutrients"
                exact
                component={RecipesNutrients}
              />
              <Route
                path="/recipes/:recipeId"
                exact
                component={RecipeInfoPage}
              />
              <Route path="/auth" exact component={Auth} />
              <Route path="/myrecipes" exact component={MyRecipesPage} />
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </>
  );
};

export default App;
