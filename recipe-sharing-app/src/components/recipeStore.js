// src/stores/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [], // Initial list of recipes
  favorites: [], // Array of favorite recipe IDs
  recommendations: [], // Array of recommended recipes
  searchTerm: '', // State for the search term
  filteredRecipes: [], // State for filtered recipes

  // Action to add a new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: Date.now().toString() }],
    })),

  // Action to set the list of recipes (e.g., from an API)
  setRecipes: (recipes) => set({ recipes }),

  // Action to update the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on the search term
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    set({
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    });
  },

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
