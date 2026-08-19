const urlParams = new URLSearchParams(window.location.search);
const recipeId = parseInt(urlParams.get('id')) || 1; // Default to ID 1 (Jollof Rice) if no ID is specified

// Search for the recipe object in the global 'recipes' array 
const recipe = recipes.find(r => r.id === recipeId) || recipes[0];

// Update Page Title, Category, and Recipe Name
document.title = `${recipe.name} - Chop Recipes`;
document.getElementById('recipeCategory').textContent = recipe.category.toUpperCase();
document.getElementById('recipeTitle').textContent = `${recipe.name}.`;

// Update Preparation/Cooking Times & Difficulty
document.getElementById('cookTime').textContent = recipe.time || '45 min';
document.getElementById('difficulty').textContent = recipe.difficulty || 'Easy';

// Render Ingredients Dynamically
const ingredientsContainer = document.getElementById('ingredientsList');
if (recipe.ingredients && recipe.ingredients.length > 0) {
    ingredientsContainer.innerHTML = recipe.ingredients
        .map(ingredient => `<li><span class="ingredient-dot"></span>${ingredient}</li>`)
        .join('');
}

// Render Instructions Dynamically
const instructionsContainer = document.getElementById('instructionsList');
if (recipe.steps && recipe.steps.length > 0) {
    instructionsContainer.innerHTML = recipe.steps
        .map((step, index) => {
            const stepNum = (index + 1).toString().padStart(2, '0');
            return `<li><span class="number">${stepNum}</span> ${step}</li>`;
        })
        .join('');
}

//Video Section Handling
const videoSection = document.getElementById('videoSection');
const recipeVideo = document.getElementById('recipeVideo');
if (recipe.videoUrl) {
    recipeVideo.src = recipe.videoUrl;
    videoSection.style.display = 'block';
} else {
    videoSection.style.display = 'none';
    recipeVideo.src = '';
}
