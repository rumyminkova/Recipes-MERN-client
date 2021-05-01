import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiBlackBook } from "react-icons/gi";

import { fetchMyRecipes } from "../actions/myrecipes/myrecipesActions";
import Loading from "../components/Loading";
import RecipesList from "../recipes/RecipesList";
import CustomAlert from "../components/CustomAlert";

const MyRecipesPage = () => {
  const recipes = useSelector((state) => state.myrecipes);
  const user = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchMyRecipes());
    }
  }, []);

  if (!user)
    return (
      <>
        <CustomAlert text="Sign in to access your Cookbook" redirect="/" />
      </>
    );

  return (
    <>
      {recipes.error ? (
        <CustomAlert text={`${recipes.error.message}`} redirect="/" />
      ) : recipes.loading ? (
        <Loading />
      ) : (
        <div className="container p-5 my-5 myrecipes-container">
          <p className="recipe-info_title text-center my-5">
            <GiBlackBook className="myrecipes_icon mr-3" />
            {user.name}'s Cookbook
          </p>
          <RecipesList
            recipes={recipes.items}
            showCalInfo={false}
            showDeleteButton
          />
        </div>
      )}
    </>
  );
};
export default MyRecipesPage;
