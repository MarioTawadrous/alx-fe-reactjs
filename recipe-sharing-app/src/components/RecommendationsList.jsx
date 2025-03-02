// src/components/RecommendationsList.jsx
import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "../stores/recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                <h3>{recipe.title}</h3>
              </Link>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available. Add some favorites to get started!</p>
      )}
    </div>
  );
};

export default RecommendationsList;
