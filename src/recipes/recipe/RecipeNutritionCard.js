import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImgOverlay, CardImg, CardTitle } from "reactstrap";

const RecipeNutritionCard = ({ recipe }) => {
  return (
    <div>
      <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: "none" }}>
        <Card className="border-0">
          <CardImg width="100%" src={recipe.image} alt={recipe.title} />
          <CardTitle className="my-3 recipe_card_title">
            {recipe.title}
          </CardTitle>
          {/* <CardImgOverlay className="recipe_card_overlay d-flex justify-content-around">
              <div>
                <FaRegClock
                  size="2.3rem"
                  style={{
                    verticalAlign: "middle",
                    color: "rgb(255,255, 255)",
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
                    color: "rgb(255,255, 255)",
                  }}
                  className="mr-2"
                />
                {recipe.servings}
              </div>
            </CardImgOverlay> */}
        </Card>
      </Link>
    </div>
  );
};

export default RecipeNutritionCard;
