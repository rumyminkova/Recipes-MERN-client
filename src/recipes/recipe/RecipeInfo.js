import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FaUtensils, FaRegClock } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {AiOutlinePlus } from "react-icons/ai";

import { postRecipe } from "../../actions/myrecipes/myrecipesActions";
import RenderIngredients from "./RenderIngredients";
import RenderDirections from "./RenderDirections";
import RenderTags from "./RenderTags";
import CustomButton from "../../components/CustomButton";
import "./RecipeInfo.css";

const RecipeInfo = () => {
  const history = useHistory();
  const recipe = useSelector((state) => state.recipe.item);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const addRecipe = () => {
    if (user?.result?.email) {
      const newRecipe = {
        api_id: recipe.id,
        title: recipe.title,
        imageUrl: recipe.image,
        servings: recipe.servings,
        readyInMinutes: recipe.readyInMinutes,
      };
      dispatch(postRecipe(newRecipe));
    } else {
      console.log("Login first");
    }
  };

  if (JSON.stringify(recipe) === "{}") {
    return <div>No info was found </div>;
  }

  return (
    <>
      <div className="container recipe-main-container">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-10 col-md-10 col-lg-8 recipe-container_info my-5">
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span
                className="goback-button"
                onClick={() => {
                  history.goBack();
                }}
              >
                <HiOutlineArrowLeft className="mx-1" />
                Back
              </span>
              <CustomButton
                buttonLabel={<AiOutlinePlus size="2rem" />}
                onClick={addRecipe}
              />
            </div>
            <div className="mx-3 my-5">
              <p className="recipe-info_title text-center">{recipe.title}</p>
            </div>
            <div className="m-5">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10">
                  <RenderTags recipe={recipe} />
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="img-thumbnail img-fluid"
                    width="100%"
                  />
                  <div className="row mt-4">
                    <div className="col-6 text-center">
                      <FaRegClock
                        size="2.3rem"
                        style={{
                          verticalAlign: "middle",
                          color: "rgb(255, 175, 42)",
                        }}
                      />
                      <span className="text-small-italic"> Ready in</span>
                      <h1 className="display-5 mt-3">
                        {recipe.readyInMinutes}
                        <span className="text-small-italic"> min</span>{" "}
                      </h1>
                    </div>
                    <div className="col-6 text-center">
                      <FaUtensils
                        size="2.3rem"
                        style={{
                          verticalAlign: "middle",
                          color: "rgb(255, 175, 42)",
                        }}
                      />
                      <span className="text-small-italic"> Servings</span>
                      <h1 className="display-5 mt-3">{recipe.servings}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="recipe-info_subtitle mx-5">Ingredients</p>
              <hr className="underline mb-4"></hr>
              {recipe.extendedIngredients && (
                <RenderIngredients ingredients={recipe.extendedIngredients} />
              )}
            </div>

            <div className="text-justify">
              <p className="recipe-info_subtitle mx-5">Directions</p>
              <hr className="underline mb-4"></hr>
              <RenderDirections directions={recipe.analyzedInstructions} />
            </div>

            <div className="p-2">
              <hr className="underline mb-4"></hr>
              <p className="recipe-source-text">
                <span className="mr-2 font-weight-bold">Recipe source:</span>
                <a
                  className="source-link text-italic"
                  href={recipe.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {recipe.sourceUrl}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeInfo;
