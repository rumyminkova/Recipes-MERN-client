import React from "react";

import { RECIPE_TAGS } from "../../shared/data";

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

export default RenderTags;
