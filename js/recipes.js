let currentCategory = 'All';
let currentSearchQuery = '';

function renderRecipesGrid(recipesToDisplay) {
    const gridContainer = document.getElementById('recipesGrid');

    if (!recipesToDisplay || recipesToDisplay.length === 0) {
        gridContainer.innerHTML = `
            <div style="grid-column: 1 / -1; padding: 4rem 2rem; text-align: center; color: var(--muted);">
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">No recipes found</h3>
                <p>Try searching for a different dish name or ingredient!</p>
            </div>
        `;
        return;
    }

    gridContainer.innerHTML = recipesToDisplay.map(recipe => {
        let imageSrc = recipe.image ? `../${recipe.image}` : '../assets/images/download (10).jpeg';
        
        return `
            <div class="box" onclick="location.href='details.html?id=${recipe.id}'">
                <div class="img">
                    <img src="${imageSrc}" alt="${recipe.name}" onerror="this.src='../assets/images/download (10).jpeg'">
                </div>
                <div class="img-text">
                    <span class="color">${recipe.category}</span><br>
                    <span class="bold"></span>${recipe.name}<br>
                    <div class="time">
                        <div>${recipe.time || '30 min'}</div>
                        <div>${recipe.difficulty || 'Easy'}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Function to apply both Search Query and Category Filter
function applyRecipeFilters() {
    const filtered = recipes.filter(recipe => {
        // 1. Category Filter Check
        const matchesCategory = (currentCategory === 'All') || 
                                (recipe.category.toLowerCase().includes(currentCategory.toLowerCase()));

        // 2. Search Query Check (Search by Name OR Ingredients)
        const nameMatch = recipe.name.toLowerCase().includes(currentSearchQuery);
        const ingredientMatch = recipe.ingredients && recipe.ingredients.some(ing => ing.toLowerCase().includes(currentSearchQuery));
        const matchesSearch = nameMatch || ingredientMatch;

        return matchesCategory && matchesSearch;
    });

    renderRecipesGrid(filtered);
}

// Event Listener: Search Bar Input
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        currentSearchQuery = e.target.value.toLowerCase().trim();
        applyRecipeFilters();
    });
}

// Event Listener: Category Filter Buttons
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        currentCategory = this.getAttribute('data-category');
        applyRecipeFilters();
    });
});

// Check if a category parameter was passed in the URL
const urlParams = new URLSearchParams(window.location.search);
const categoryParam = urlParams.get('category');
if (categoryParam) {
    currentCategory = categoryParam;
    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-category').toLowerCase() === categoryParam.toLowerCase()) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initial Render on Page Load
applyRecipeFilters();
