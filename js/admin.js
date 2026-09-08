// NIGERIAN RECIPE AUTO-IMPORTER ENGINE (js/admin.js)

let currentParsedRecipe = null;

// Tab Switcher
const tabSmart = document.getElementById('tabSmart');
const tabManual = document.getElementById('tabManual');
const smartTabContent = document.getElementById('smartTabContent');
const manualTabContent = document.getElementById('manualTabContent');

if (tabSmart && tabManual) {
    tabSmart.addEventListener('click', () => {
        tabSmart.classList.add('active');
        tabManual.classList.remove('active');
        smartTabContent.classList.remove('hidden');
        manualTabContent.classList.add('hidden');
    });

    tabManual.addEventListener('click', () => {
        tabManual.classList.add('active');
        tabSmart.classList.remove('active');
        manualTabContent.classList.remove('hidden');
        smartTabContent.classList.add('hidden');
    });
}

// Extract YouTube Embed URL
function extractYouTubeEmbed(urlStr) {
    if (!urlStr) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = urlStr.match(regExp);
    if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}`;
    }
    return urlStr;
}

// Auto-Parse Recipe Engine
const btnParse = document.getElementById('btnParse');
if (btnParse) {
    btnParse.addEventListener('click', parseSmartRecipe);
}

function parseSmartRecipe() {
    const rawText = document.getElementById('pasteBox').value.trim();
    if (!rawText) {
        alert('Please paste recipe text or a YouTube link first!');
        return;
    }

    const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);

    let name = "Custom Nigerian Dish";
    let category = document.getElementById('smartCategory').value || "Soup";
    let region = document.getElementById('smartRegion').value || "National";
    let time = "40 min";
    let difficulty = "Medium";
    let image = "assets/data-images/download (10).jpeg";
    let videoUrl = "";
    let ingredients = [];
    let steps = [];

    let currentSection = "";

    lines.forEach((line, index) => {
        // Detect YouTube Link
        if (line.includes('youtube.com') || line.includes('youtu.be')) {
            videoUrl = extractYouTubeEmbed(line);
        }

        // Detect Title / Name
        if (line.toLowerCase().startsWith('dish:') || line.toLowerCase().startsWith('name:') || line.toLowerCase().startsWith('title:')) {
            name = line.split(':')[1].trim();
        } else if (index === 0 && !line.includes(':') && line.length < 50) {
            name = line;
        }

        // Detect Region
        if (line.toLowerCase().startsWith('region:')) {
            region = line.split(':')[1].trim();
        }

        // Detect Category
        if (line.toLowerCase().startsWith('category:')) {
            category = line.split(':')[1].trim();
        }

        // Detect Time
        if (line.toLowerCase().startsWith('time:') || line.toLowerCase().startsWith('prep time:')) {
            time = line.split(':')[1].trim();
        }

        // Section Headers
        if (line.toLowerCase().includes('ingredient')) {
            currentSection = 'ingredients';
            return;
        } else if (line.toLowerCase().includes('step') || line.toLowerCase().includes('instruction') || line.toLowerCase().includes('method')) {
            currentSection = 'steps';
            return;
        }

        // Add to sections
        if (currentSection === 'ingredients') {
            const cleaned = line.replace(/^[-*•\d.]+\s*/, '').trim();
            if (cleaned) ingredients.push(cleaned);
        } else if (currentSection === 'steps') {
            const cleaned = line.replace(/^[-*•\d.]+\s*/, '').trim();
            if (cleaned) steps.push(cleaned);
        }
    });

    // Fallbacks if no sections detected
    if (ingredients.length === 0) {
        ingredients = ["Assorted meats or fish", "Palm oil or Vegetable oil", "Seasoning cubes & Pepper to taste"];
    }
    if (steps.length === 0) {
        steps = ["Prepare ingredients and boil seasoned protein.", "Cook sauce/soup over medium heat until tender.", "Serve hot."];
    }

    currentParsedRecipe = {
        id: Date.now(),
        name,
        category,
        region,
        time,
        difficulty,
        image,
        videoUrl,
        ingredients,
        steps
    };

    renderPreview(currentParsedRecipe);
}

// Render Preview Card
function renderPreview(recipe) {
    const container = document.getElementById('previewContainer');
    if (!container) return;

    let imageSrc = recipe.image ? `../${recipe.image}` : '../assets/images/download (10).jpeg';

    container.innerHTML = `
        <div class="box" style="width: 100%; margin: 0;">
            <div class="img">
                <img src="${imageSrc}" alt="${recipe.name}" onerror="this.src='../assets/images/download (10).jpeg'">
            </div>
            <div class="img-text">
                <span class="color">${recipe.category} • ${recipe.region}</span><br>
                <span class="bold" style="font-weight: 700; font-size: 1.1rem; color: var(--text);">${recipe.name}</span><br>
                <div class="time">
                    <div>${recipe.time}</div>
                    <div>${recipe.difficulty}</div>
                </div>
            </div>
        </div>
    `;
}

// Save Recipe Live to LocalStorage
const btnSaveLive = document.getElementById('btnSaveLive');
if (btnSaveLive) {
    btnSaveLive.addEventListener('click', () => {
        // If in manual tab, collect manual inputs
        if (!manualTabContent.classList.contains('hidden')) {
            const name = document.getElementById('manualName').value.trim();
            if (!name) {
                alert('Please enter a dish name!');
                return;
            }
            const ingText = document.getElementById('manualIngredients').value.trim();
            const stepsText = document.getElementById('manualSteps').value.trim();

            currentParsedRecipe = {
                id: Date.now(),
                name: name,
                category: document.getElementById('manualCategory').value,
                region: document.getElementById('manualRegion').value,
                time: document.getElementById('manualTime').value || '40 min',
                difficulty: 'Medium',
                image: document.getElementById('manualImage').value || 'assets/data-images/download (10).jpeg',
                videoUrl: extractYouTubeEmbed(document.getElementById('manualVideo').value),
                ingredients: ingText ? ingText.split('\n').filter(i => i.trim()) : ['Seasoning and spices'],
                steps: stepsText ? stepsText.split('\n').filter(s => s.trim()) : ['Cook until tender and serve.']
            };
        }

        if (!currentParsedRecipe) {
            alert('Please parse or fill out a recipe first!');
            return;
        }

        let saved = JSON.parse(localStorage.getItem('custom_recipes') || '[]');
        saved.push(currentParsedRecipe);
        localStorage.setItem('custom_recipes', JSON.stringify(saved));

        alert(`Success! "${currentParsedRecipe.name}" has been published live on your site!`);
        currentParsedRecipe = null;
        document.getElementById('previewContainer').innerHTML = '<p class="placeholder-text">Recipe published! Parse another dish above...</p>';
        loadCustomRecipesList();
    });
}

// Load Custom Saved Recipes List
function loadCustomRecipesList() {
    const listContainer = document.getElementById('customRecipesList');
    const countEl = document.getElementById('customCount');
    if (!listContainer) return;

    let saved = JSON.parse(localStorage.getItem('custom_recipes') || '[]');
    if (countEl) countEl.textContent = saved.length;

    if (saved.length === 0) {
        listContainer.innerHTML = '<p style="color: var(--muted); font-size: 12px;">No custom recipes imported yet.</p>';
        return;
    }

    listContainer.innerHTML = saved.map((item, idx) => `
        <div class="custom-item">
            <div class="custom-item-info">
                <div class="custom-item-name">${item.name}</div>
                <div class="custom-item-meta">${item.category} • ${item.region}</div>
            </div>
            <button class="delete-btn" onclick="deleteCustomRecipe(${idx})">Delete</button>
        </div>
    `).join('');
}

window.deleteCustomRecipe = function(index) {
    let saved = JSON.parse(localStorage.getItem('custom_recipes') || '[]');
    saved.splice(index, 1);
    localStorage.setItem('custom_recipes', JSON.stringify(saved));
    loadCustomRecipesList();
};

// Export to data.js File
const btnExportData = document.getElementById('btnExportData');
if (btnExportData) {
    btnExportData.addEventListener('click', () => {
        let customSaved = JSON.parse(localStorage.getItem('custom_recipes') || '[]');
        let combinedRecipes = [...recipes, ...customSaved];

        let fileContent = `const recipes = ${JSON.stringify(combinedRecipes, null, 4)};\n`;

        let blob = new Blob([fileContent], { type: 'text/javascript' });
        let url = URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'data.js';
        a.click();
        URL.revokeObjectURL(url);
    });
}

// Initialize on page load
loadCustomRecipesList();
