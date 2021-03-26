import React from "react";
import { useHistory } from "react-router-dom";
import { FaUtensils, FaRegClock } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import { HiOutlineArrowLeft } from "react-icons/hi";

import { RECIPE_TAGS } from "../../shared/data";
import "./RecipeInfo.css";

const RenderIngredients = ({ ingredients }) => {
  if (ingredients && ingredients.length) {
    return (
      <ul className="justify-content-left my-4">
        {ingredients.map((ingredient) => {
          return (
            <li key={ingredient.originalString} className="p-3">
              <BsCheck
                className="mr-4"
                size="2.3rem"
                style={{
                  verticalAlign: "middle",
                  color: "rgb(255, 175, 42)",
                }}
              />{" "}
              {ingredient.originalString}
            </li>
          );
        })}
      </ul>
    );
  }
  return <div> No ingredients found. See recipe source below</div>;
};

const RenderDirections = ({ directions }) => {
  if (directions && directions.length) {
    const steps = directions[0].steps;
    return (
      <ol className="justify-content-left">
        {steps.map((step) => {
          return (
            <li key={step.number} className="my-4 p-3 ml-5 mr-3">
              {step.step}
            </li>
          );
        })}
      </ol>
    );
  }

  return <div>No directions found. See recipe source below</div>;
};

const RenderTags = ({ recipe }) => {
  return (
    <ul className="mt-3 ml-3">
      {RECIPE_TAGS.map((tag) =>
        recipe[tag] ? (
          <li
            className="btn disabled  m-1 text-uppercase"
            style={{ backgroundColor: "rgba(255, 175, 42, .7)" }}
            key={tag}
          >
            {tag}
          </li>
        ) : null
      )}
    </ul>
  );
};

const RecipeInfo = ({ recipe }) => {
  const history = useHistory();

  if (JSON.stringify(recipe) === "{}") {
    return <div>No info was found </div>;
  }

  return (
    <>
      <div className="container recipe-main-container">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-10 col-md-10 col-lg-8 recipe-container_info my-5">
            <span
              className="goback-button"
              onClick={() => {
                history.goBack();
              }}
            >
              <HiOutlineArrowLeft className="mx-1" />
              Back
            </span>
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
