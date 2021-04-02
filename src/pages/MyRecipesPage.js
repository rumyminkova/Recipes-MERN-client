import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchMyRecipes } from "../actions/myrecipes/myrecipesActions";
import Loading from "../components/Loading";
import RecipesList from "../recipes/RecipesList";

const MyRecipesPage = () => {
  const recipes = useSelector((state) => state.myrecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyRecipes());
  }, [dispatch]);

  return (
    <>
      {recipes.loading ? (
        <Loading />
      ) : recipes.error ? (
        <h1 className="text-center"> {recipes.error} </h1>
      ) : (
        <RecipesList recipes={recipes.items} showCalInfo={false} />
      )}
    </>
  );
};

export default MyRecipesPage;
