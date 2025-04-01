import { create } from 'zustand';
//setSearchTerm 
// searchTerm
const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    // Mock implementation: Recommend recipes similar to favorites
    const recommended = recipes.filter(
      (recipe) =>
        favorites.includes(recipe.id) && Math.random() > 0.5 // Randomize for demo
    );
    set({ recommendations: recommended });
  },
  // Existing actions (addRecipe, deleteRecipe, updateRecipe, etc.)
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;