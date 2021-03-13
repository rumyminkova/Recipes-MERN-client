import React from "react";

const RecipesList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <div>
          <Recipe recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default RecipesList;
