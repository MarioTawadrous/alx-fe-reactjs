// src/stores/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [], // Initial list of recipes
  searchTerm: '', // Current search term
  filteredRecipes: [], // Filtered list of recipes

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

  // Optional: Add more filtering criteria (e.g., ingredients, preparation time)
}));

export default useRecipeStore;
