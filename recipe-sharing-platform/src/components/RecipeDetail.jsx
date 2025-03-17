import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe with the matching ID
    const selectedRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-2xl mt-8">Recipe not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">{recipe.title}</h1>
      <div className="max-w-2xl mx-auto">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside mb-8">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {ingredient}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;