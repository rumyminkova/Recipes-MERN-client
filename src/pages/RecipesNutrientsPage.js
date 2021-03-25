import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipesByNutrients } from "../actions/nutrientsActions";

// import RecipesList from "../recipes/RecipesList";
// import SearchForm from "../components/SearchForm";
import Loading from "../components/Loading";

const RecipesNutrients = () => {
  const recipes = useSelector((state) => state.nutrients);
  const formData = {
    minCalories: 0,
    maxCalories: 250,
    minCarbs: 0,
    maxCarbs: 100,
    minProtein: 0,
    maxProtein: 100,
    minFat: 0,
    maxFat: 20,
  };
  const dispatch = useDispatch();
  return (
    <>
      Recipes nutrients
      <button onClick={() => dispatch(fetchRecipesByNutrients(formData))}>
        Go
      </button>
      {/* <div className="d-flex justify-content-center align-items-center my-5 search-container mx-auto">
        <SearchForm />
      </div> */}
      {/* {recipes.isLoading ? (
        <Loading />
      ) : recipes.error ? (
        <h1> {recipes.error} </h1>
      ) : (
        <RecipesList recipes={recipes.items} />
      )} */}
    </>
  );
};

export default RecipesNutrients;
