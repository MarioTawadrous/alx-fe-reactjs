// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import useRecipeStore from '../stores/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length > 0 ? (
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              {/* Use Link to navigate to the recipe details page */}
              <Link to={`/recipes/${recipe.id}`}>
                <h3>{recipe.title}</h3>
              </Link>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
