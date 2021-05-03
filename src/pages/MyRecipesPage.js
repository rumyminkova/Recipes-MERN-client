import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiBlackBook } from "react-icons/gi";
import { useHistory } from "react-router-dom";

import { fetchMyRecipes } from "../actions/myrecipes/myrecipesActions";
import { setError } from "../actions/errors/errorActions";
import Loading from "../components/Loading";
import RecipesList from "../recipes/RecipesList";

const MyRecipesPage = () => {
  const recipes = useSelector((state) => state.myrecipes);
  const user = useSelector((state) => state.auth.currentUser);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      dispatch(setError("Please sign in to access your Cookbook"));
      history.push("/");
    } else {
      dispatch(fetchMyRecipes());
    }
  }, []);

  if (user) {
    return (
      <>
        {recipes.loading ? (
          <Loading />
        ) : (
          <div className="container p-5 my-5 myrecipes-container">
            <p className="recipe-info_title text-center my-5">
              <GiBlackBook className="myrecipes_icon mr-3" />
              Cookbook
            </p>
            {recipes.items.length === 0 ? (
              <h2 className="text-center">Your Cookbook is empty</h2>
            ) : (
              <RecipesList
                recipes={recipes.items}
                showCalInfo={false}
                showDeleteButton
              />
            )}
          </div>
        )}
      </>
    );
  } else return null;
};
export default MyRecipesPage;
