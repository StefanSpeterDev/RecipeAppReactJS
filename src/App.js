import React, { useEffect, useState } from "react";
import Recipe from "./Recipe"
import "./App.css";

const App = () => {
  const APP_ID = "41a85e69";
  const APP_KEY = "4c4651dc9084c7b7edfa1bb2e22f5fac";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {getRecipes()}, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    ); // Attend de recevoir des data
    const data = await response.json(); //reçoit les data et crée un json les stockant
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        // Appel de Recipe.js / Le recipe est la var dans le json de l'api qui permet de ressortir les données des recettes
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image} />
      ))}
    </div>
  );
};

export default App;
