// src/stores/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [], // Initial list of recipes
  favorites: [], // Array of favorite recipe IDs
  recommendations: [], // Array of recommended recipes

  // Action to add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Action to generate recommendations based on favorites
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) =>
        favorites.includes(recipe.id) && Math.random() > 0.5 // Mock logic
    );
    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;
