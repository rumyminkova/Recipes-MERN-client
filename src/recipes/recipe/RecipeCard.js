import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImgOverlay, CardImg, CardTitle } from "reactstrap";
import { FaUtensils, FaRegClock } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";

import { RECIPES_IMAGES } from "../../config";
import CustomButton from "../../components/CustomButton";
import "./RecipeCard.css";

const MainOverlay = ({ readyInMinutes, servings }) => {
  return (
    <CardImgOverlay className="recipe_card_overlay d-flex justify-content-around align-items-start">
      <div>
        <FaRegClock
          size="2.3rem"
          style={{
            verticalAlign: "middle",
            color: "rgb(255,255, 255)",
          }}
          className="mr-2"
        />
        {readyInMinutes} min
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
        {servings}
      </div>
    </CardImgOverlay>
  );
};

const InfoOverlay = ({ calories, fat, carbs, protein }) => {
  return (
    <CardImgOverlay className="recipe_card_overlay d-flex justify-content-between">
      <p className="fw-bold"> Calories {calories} </p>
      <ul className="text-right">
        <li>Protein {protein}</li>
        <li>Fat {fat}</li>
        <li>Carbs {carbs}</li>
      </ul>
    </CardImgOverlay>
  );
};

const RecipeCard = ({ recipe, showCalInfo, showDeleteButton }) => {
  const imageUrl = `${RECIPES_IMAGES}${recipe.id}-312x231.jpg`;

  const handleDeleteRecipe = (recipeId) => {
    console.log(recipeId);
  }

  
  return (
    <div>
      {showDeleteButton && (
        <div className="text-right">
          <CustomButton
            buttonLabel={<AiOutlineMinus size="2rem" />}
            onClick={handleDeleteRecipe}
          />
        </div>
      )}
      <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: "none" }}>
        <Card className="border-0">
          <CardImg width="100%" src={imageUrl} alt={recipe.title} />
          <CardTitle className="my-3 recipe_card_title px-2 py-1">
            {recipe.title}
          </CardTitle>
          {showCalInfo ? (
            <InfoOverlay
              calories={recipe.calories}
              fat={recipe.fat}
              carbs={recipe.fat}
              protein={recipe.protein}
            />
          ) : (
            <MainOverlay
              readyInMinutes={recipe.readyInMinutes}
              servings={recipe.servings}
            />
          )}
        </Card>
      </Link>
    </div>
  );
};
export default RecipeCard;
