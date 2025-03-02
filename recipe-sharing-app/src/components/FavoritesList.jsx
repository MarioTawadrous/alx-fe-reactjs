// src/components/FavoritesList.jsx
import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "../stores/recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) =>
      state.recipes.find((recipe) => recipe.id === id)
    )
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                <h3>{recipe.title}</h3>
              </Link>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites yet. Add some recipes to your favorites!</p>
      )}
    </div>
  );
};

export default FavoritesList;
