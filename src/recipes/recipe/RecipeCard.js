import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImgOverlay, CardImg, CardTitle } from "reactstrap";
import { FaUtensils, FaRegClock } from "react-icons/fa";

import { RECIPES_IMAGES } from "../../config";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const imageUrl = `${RECIPES_IMAGES}${recipe.id}-312x231.jpg`;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 my-5 px-5 px-sm-3">
      <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: "none" }}>
        <Card className="border-0">
          <CardImg
            width="100%"
            src={imageUrl}
            alt={recipe.title}
            className="recipe-img"
          />
          <CardTitle className="p-2 mt-2 recipe_card_title">
            {recipe.title}
          </CardTitle>
          <CardImgOverlay className="recipe_card_overlay d-flex justify-content-around">
            <div>
              <FaRegClock
                size="2.3rem"
                style={{
                  verticalAlign: "middle",
                  color: "rgb(255, 175, 42)",
                }}
                className="mr-2"
              />
              {recipe.readyInMinutes} min
            </div>
            <div>
              <FaUtensils
                size="2.3rem"
                style={{
                  verticalAlign: "middle",
                  color: "rgb(255, 175, 42)",
                }}
                className="mr-2"
              />
              {recipe.servings}
            </div>
          </CardImgOverlay>
        </Card>
      </Link>
    </div>
  );
};
export default RecipeCard;
