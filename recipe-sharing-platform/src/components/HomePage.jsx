import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 shadow-md rounded hover:shadow-lg">
            <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
            <p className="text-sm text-gray-600">{recipe.summary}</p>
            <a href={`/recipes/${recipe.id}`} className="text-blue-500 hover:underline mt-2 block">
              View Recipe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
