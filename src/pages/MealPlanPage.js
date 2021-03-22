import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// import RecipesList from "../recipes/RecipesList";
// import SearchForm from "../components/SearchForm";

const MealsPlanPage = () => {
  const meals = useSelector((state) => state.meals);

  useEffect(() => {
    //   dispatch(fetchRecipes);
  }, []);

  return (
    <>
      {/* <div className="d-flex justify-content-center align-items-center my-5 search-container mx-auto">
        <SearchForm />
      </div>
      {recipes.isLoading ? (
        <h1> Loading </h1>
      ) : recipes.error ? (
        <h1> {recipes.error} </h1>
      ) : (
        <RecipesList recipes={recipes.items} />
      )} */}
      <h1> MealsPlan</h1>
    </>
  );
};

export default MealsPlanPage;
