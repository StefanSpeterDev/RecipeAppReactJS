import React from "react";

// Va importer le nombre de recettes que l'api possède et la formatter selon ce que l'on met comme info
const Recipe = ({ title, calories, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
