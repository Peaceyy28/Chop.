// 1. Extract the 'id' parameter from the web address URL (e.g. details.html?id=3)
const urlParams = new URLSearchParams(window.location.search);
const recipeId = parseInt(urlParams.get('id')) || 1; // Default to ID 1 (Jollof Rice) if no ID is specified

// 2. Search for the recipe object in the global 'recipes' array AND localStorage custom recipes
const customSaved = JSON.parse(localStorage.getItem('custom_recipes') || '[]');
const allAvailableRecipes = [...recipes, ...customSaved];
const recipe = allAvailableRecipes.find(r => r.id == recipeId) || recipes[0];

// 3. Update Page Title, Category, and Recipe Name
document.title = `${recipe.name} - Chop Recipes`;
const regionText = recipe.region ? ` • ${recipe.region.toUpperCase()}` : '';
document.getElementById('recipeCategory').textContent = `${(recipe.category || 'RECIPE').toUpperCase()}${regionText}`;
document.getElementById('recipeTitle').textContent = `${recipe.name}.`;

// 4. Update Hero Image if available
const recipeHeroWrapper = document.getElementById('recipeHeroWrapper');
const recipeImage = document.getElementById('recipeImage');
if (recipe.image && recipeHeroWrapper && recipeImage) {
    let imgPath = recipe.image;
    // Normalize path relative to /recipes/ directory
    if (!imgPath.startsWith('../') && !imgPath.startsWith('/')) {
        imgPath = `../${imgPath}`;
    }
    recipeImage.src = imgPath;
    recipeImage.alt = recipe.name;
    recipeHeroWrapper.style.display = 'block';
} else if (recipeHeroWrapper) {
    recipeHeroWrapper.style.display = 'none';
}

// 5. Update Preparation/Cooking Times, Servings & Difficulty
const prepTimeEl = document.getElementById('prepTime');
if (prepTimeEl) prepTimeEl.textContent = recipe.prepTime || '15 min';

const cookTimeEl = document.getElementById('cookTime');
if (cookTimeEl) cookTimeEl.textContent = recipe.time || '45 min';

const servingsEl = document.getElementById('servings');
if (servingsEl) servingsEl.textContent = recipe.servings || '4-6';

const difficultyEl = document.getElementById('difficulty');
if (difficultyEl) difficultyEl.textContent = recipe.difficulty || 'Easy';

// 6. Render Ingredients Dynamically
const ingredientsContainer = document.getElementById('ingredientsList');
if (ingredientsContainer) {
    if (recipe.ingredients && recipe.ingredients.length > 0) {
        ingredientsContainer.innerHTML = recipe.ingredients
            .map(ingredient => `<li><span class="ingredient-dot"></span>${ingredient}</li>`)
            .join('');
    } else {
        ingredientsContainer.innerHTML = `<li><span class="ingredient-dot"></span>Ingredients coming soon.</li>`;
    }
}

// 7. Render Cooking Steps / Instructions Dynamically
const instructionsContainer = document.getElementById('instructionsList');
if (instructionsContainer) {
    if (recipe.steps && recipe.steps.length > 0) {
        instructionsContainer.innerHTML = recipe.steps
            .map((step, index) => {
                const stepNum = (index + 1).toString().padStart(2, '0');
                return `<li><span class="number">${stepNum}</span> <span>${step}</span></li>`;
            })
            .join('');
    } else {
        instructionsContainer.innerHTML = `<li><span class="number">01</span> <span>Instructions coming soon.</span></li>`;
    }
}

// 8. Render Video Walkthrough if available
const videoSection = document.getElementById('videoSection');
const recipeVideo = document.getElementById('recipeVideo');
if (videoSection && recipeVideo) {
    if (recipe.videoUrl) {
        recipeVideo.src = recipe.videoUrl;
        videoSection.style.display = 'block';
    } else {
        videoSection.style.display = 'none';
        recipeVideo.src = '';
    }
}

