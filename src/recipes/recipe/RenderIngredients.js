import React from "react";
import { BsCheck } from "react-icons/bs";

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

export default RenderIngredients;
