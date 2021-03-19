import React from "react";
import { CardImg, Card } from "reactstrap";
import { FaUtensils, FaRegClock } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";

import { RECIPE_TAGS } from "../../shared/data";
import "./RecipeInfo.css";

const RenderIngredients = ({ ingredients }) => {
  if (ingredients) {
    return (
      <ul className="justify-content-left my-4">
        {ingredients.map((ingredient) => {
          return (
            <p key={ingredient.id} className="p-3">
              <BsCheck
                className="mr-4"
                size="2.3rem"
                style={{
                  verticalAlign: "middle",
                  color: "rgb(255, 175, 42)",
                }}
              />{" "}
              {ingredient.originalString}
            </p>
          );
        })}
      </ul>
    );
  }
  return <div> No ingredients found</div>;
};

const RenderDirections = ({ directions }) => {
  if (directions) {
    const steps = directions[0].steps;
    return (
      <ol className="justify-content-left">
        {steps.map((step) => {
          return (
            <li key={step.number} className="my-4 p-3">
              {step.step}
            </li>
          );
        })}
      </ol>
    );
  }

  return <div></div>;
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
  if (recipe) {
    return (
      <>
        <div className="container d-flex justify-content-end my-5">
          <button>Add to Cookbook</button>
        </div>
        <div className="container recipe-main-container">
          <div className="row justify-content-around">
            <div className="col-12 col-sm-10 col-md-7 col-lg-6">
              <div>
                <p className="recipe-info_title text-center">{recipe.title}</p>
              </div>
              <div>
                <RenderTags recipe={recipe} />
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="img-thumbnail img-fluid"
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

              <div>
                <h4 className="display-4 mx-5">Ingredients</h4>
                <hr className="underline mb-4"></hr>
                <RenderIngredients ingredients={recipe.extendedIngredients} />
              </div>

              <div className="text-justify">
                <h3 className="display-4 mx-5">Directions</h3>
                <hr className="underline mb-4"></hr>
                <RenderDirections directions={recipe.analyzedInstructions} />
              </div>

              <div>
                <hr className="underline mb-4"></hr>
                <p className="recipe-source-text">
                  <span className="mr-2">Recipe source:</span>
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
  }
};

export default RecipeInfo;
