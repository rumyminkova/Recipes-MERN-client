import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiBlackBook } from "react-icons/gi";
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
        <div className="container p-5 my-5 myrecipes-container">
          <p className="recipe-info_title text-center my-5">
            <GiBlackBook className="myrecipes_icon mr-3" />
            My Recipes
          </p>
          <RecipesList recipes={recipes.items} showCalInfo={false} />
        </div>
      )}
    </>
  );
};

export default MyRecipesPage;
