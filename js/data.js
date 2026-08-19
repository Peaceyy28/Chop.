const recipes = [
    {
        id: 1,
        name: "Jollof Rice",
        category: "Rice",
        time: "45 min",
        difficulty: "Easy",
        region: "National",
        image: "assets/data-images/jollof-rice.jpg",
        videoUrl: "https://www.youtube.com/embed/zCeh1TswwZk",
        ingredients: [
            "3 cups long grain rice",
            "5 medium tomatoes",
            "2 red bell peppers",
            "1 large onion",
            "1/2 cup vegetable oil",
            "2 cups chicken stock",
            "Salt and seasoning to taste"
        ],
        steps: [
            "Blend tomatoes, peppers and half the onion into a smooth paste.",
            "Fry the paste in oil until the raw smell disappears.",
            "Add chicken stock, seasoning and salt.",
            "Add washed rice and mix well.",
            "Cover and cook on low heat for 30 minutes."
        ]
    },
    {
        id: 2,
        name: "Fried Rice",
        category: "Rice",
        time: "60 min",
        difficulty: "Easy",
        region: "National",
        image: "assets/data images/Fried rice.jpeg",
        ingredients: [
            "2 cups cooked rice",
            "2 eggs, beaten",
            "1 cup mixed vegetables",
            "2 tbsp vegetable oil",
            "2 cloves garlic, minced",
            "Salt and pepper to taste"
        ],
        steps: [
            "Heat oil in a large pan over medium heat.",
            "Add garlic and sauté for 30 seconds.",
            "Add beaten eggs and scramble until cooked through.",
            "Add cooked rice and mix well with the eggs.",
            "Add mixed vegetables and season with salt and pepper."
        ]
    },
    {
        id: 3,
        name: "Egusi Soup",
        category: "Soup",
        time: "1 hour",
        difficulty: "Medium",
        region: "National",
        image: "assets/data-images/egusi-soup.jpeg",
        ingredients: [
            "2 cups ground egusi seeds",
            "1 cup palm oil",
            "1 medium onion, chopped",
            "2 cups chopped spinach or bitter leaf",
            "Salt and seasoning to taste",
            "Assorted meat (goat/beef/tripe)",
            "Crayfish – 2 tbsp",
            "Locust beans (iru)",
            "Scotch bonnet peppers – 3"
        ],
        steps: [
            "Season and parboil assorted meats with onion, seasoning cubes, and salt. Set stock aside.",
            "Blend egusi seeds coarsely (or use whole). Mix with a little water to form a thick paste.",
            "Heat palm oil in a pot, fry the blended peppers and onion for 10 minutes until the oil floats.",
            "Fry egusi paste in the oil, stirring constantly for 10–12 minutes until it turns golden and fragrant.",
            "Add meat stock, cooked meats, stockfish, dried fish, crayfish, and iru. Simmer for 15 minutes.",
            "Stir in washed spinach or bitter leaf. Cook for 3–5 more minutes. Adjust seasoning and serve."
        ]
    },
    {
        id: 4,
        name: "Vegetable Soup",
        category: "Soup",
        time: "40 min",
        difficulty: "Medium",
        region: "National",
        image: "assets/data-images/vegetable.jpeg",
        ingredients: [
            "2 cups mixed vegetables",
            "1 cup vegetable stock",
            "Assorted meats & ponmo",
            "Tatashe (scotch bonnet pepper)",
            "Crayfish",
            "Locust beans (iru)",
            "1 medium onion, chopped",
            "2 cloves garlic, minced",
            "1 tbsp vegetable oil",
            "Salt and pepper to taste"
        ],
        steps: [
            "Blend tatashe, scotch bonnet, and half the onion. Do not over-blend — keep it slightly chunky.",
            "Cook and season assorted meat and stockfish separately. Reserve the stock.",
            "Heat oil in a large pot over medium heat.",
            "Add chopped onion and garlic, sauté until fragrant.",
            "Fry the pepper base on medium heat for 20 minutes, stirring until the water dries and oil rises.",
            "Add meat, fish, crayfish, iru, stock, and seasoning. Stir and simmer for 10 minutes.",
            "Add mixed vegetables and cook for 5 minutes.",
            "Reduce heat and simmer for 20 minutes."
        ]
    },
    {
        id: 5,
        name: "Amala and Gbegiri",
        category: "Swallow",
        time: "30 min",
        difficulty: "Medium",
        region: "Yoruba",
        image: "assets/data-images/abula.jpeg",
        ingredients: [
            "2 cups yam flour",
            "Brown beans (honey beans) 1½ cups",
            "1/4 cup palm oil",
            "1 medium onion, chopped",
            "Crayfish",
            "Smoked fish",
            "Locust beans (iru)",
            "Scotch bonnet pepper (1)",
            "Salt and pepper to taste"
        ],
        steps: [
            "For amala: boil water in a pot. Gradually add yam flour, stirring vigorously to avoid lumps.",
            "Keep folding and turning amala on low heat for 8–10 minutes until smooth and elastic. Cover and set aside.",
            "For gbegiri: soak beans overnight, peel skins by rubbing between palms. Boil until very soft.",
            "Blend or mash beans into a smooth paste. Return to pot with palm oil, crayfish, fish, and seasoning.",
            "Simmer for 10–15 minutes, stirring constantly.",
            "Serve amala with gbegiri and your choice of soup."
        ]
    },
    {
        id: 6,
        name: "Moin Moin",
        category: "Street Food",
        time: "1 hour",
        difficulty: "Medium",
        region: "Yoruba",
        image: "assets/data-images/moin-moin.jpeg",
        ingredients: [
            "2 cups black-eyed peas or honey beans",
            "1 medium onion, chopped",
            "1/4 cup vegetable oil",
            "1 red bell pepper",
            "1 scotch bonnet pepper",
            "1/2 cup water or stock",
            "Salt and seasoning to taste",
            "Optional: boiled eggs, corned beef, or smoked fish for filling",
            "Aluminum foil or moin moin leaves for wrapping"
        ],
        steps: [
            "Soak beans for 5–10 minutes, then peel skins by rubbing between palms. Rinse thoroughly.",
            "Blend peeled beans with onion, peppers, oil, water/stock, salt, and seasoning until smooth.",
            "Transfer batter to a bowl. Add oil, crayfish, seasoning, and salt. Mix well. Batter should be pourable.",
            "If using fillings, layer a spoonful of bean mixture, add filling, then cover with more mixture.",
            "Wrap tightly in foil or leaves and secure.",
            "Steam in a pot with a rack or steamer basket for 45–60 minutes until set.",
            "Allow to cool slightly before unwrapping and serving."
        ]
    },
    {
        id: 7,
        name: "Fried Stew",
        category: "Soup",
        time: "30 min",
        difficulty: "Easy",
        region: "National",
        image: "assets/data-images/Nigerian stew - KikiFoodies.jpeg",
        ingredients: [
            "5 medium tomatoes",
            "2 red bell peppers",
            "1 medium onion",
            "1/4 cup vegetable oil",
            "Chicken or beef",
            "2 cups chicken stock",
            "Curry, thyme, bay leaves",
            "Salt and seasoning to taste",
            "Optional: cooked meat or fish for added flavor"
        ],
        steps: [
            "Blend tatashe, tomatoes, scotch bonnet, and 1 onion together until smooth.",
            "Season and fry or grill the chicken/beef until brown. Set aside with the stock.",
            "Heat oil in a large pot over medium heat.",
            "Pour in blended pepper mix. Fry on medium-high heat, stirring frequently for 25–30 minutes until very dry and deeply red.",
            "Add fried meat, stock, crayfish, curry, thyme, and seasoning.",
            "Stir and simmer for 10–15 minutes until flavors are well combined.",
            "If using added flavoring, stir in cooked meat or fish during the last 5 minutes of cooking."
        ]
    },
    {
        id: 8,
        name: "Ofe Onugbu",
        category: "Soup",
        time: "60 min",
        difficulty: "Medium",
        region: "Igbo",
        image: "assets/data-images/ofe onugbu.jpeg",
        ingredients: [
            "2 bunches bitter leaf (onugbu), washed and squeezed",
            "500g assorted meat (oxtail, tripe, goat meat)",
            "200g stockfish, soaked",
            "1/2 cup palm oil",
            "2 tablespoons cocoyam paste (ofor) or achi",
            "2 tablespoons ground crayfish",
            "1 tablespoon locust beans (ogiri igbo)",
            "3 scotch bonnet peppers, blended",
            "1 large onion",
            "Salt and seasoning cubes to taste"
        ],
        steps: [
            "Season assorted meat and stockfish with onion, salt, and seasoning cubes. Cook until tender and reserve the stock.",
            "Wash bitter leaf multiple times and squeeze well to reduce bitterness. Set aside.",
            "Heat palm oil in a pot over medium heat until hot but not bleached.",
            "Add blended peppers and onion to the palm oil. Fry for 10–12 minutes until oil floats to the top.",
            "Add cooked meat, stockfish, meat stock, crayfish, and ogiri igbo. Stir and simmer for 10 minutes.",
            "Dissolve cocoyam paste (ofor) or achi in a little water and stir into the pot to thicken the soup.",
            "Add squeezed bitter leaf, stir well, and cook for a final 5–7 minutes. Adjust seasoning and serve with fufu or eba."
        ]
    },
    {
        id: 9,
        name: "Ofe Akwu",
        category: "Soup",
        time: "45 min",
        difficulty: "Easy",
        region: "Igbo",
        image: "assets/data-images/ofe-akwu.jpeg",
        ingredients: [
            "2 cups fresh or canned palm fruit concentrate (akwu)",
            "500g chicken, beef, or catfish",
            "2 tablespoons ground crayfish",
            "3 scotch bonnet peppers",
            "1 medium onion",
            "1 tablespoon locust beans (ogiri)",
            "Fresh utazi or uziza leaves, sliced",
            "2 seasoning cubes",
            "Salt to taste",
            "Water as needed"
        ],
        steps: [
            "If using fresh palm fruits, boil for 20 minutes, pound, and extract the juice with warm water. Strain to remove chaff.",
            "Pour palm fruit juice into a pot and bring to a boil over medium-high heat, stirring occasionally.",
            "Season and cook protein of choice separately. For fish, season and fry or grill lightly.",
            "Once palm fruit sauce begins to thicken, add blended peppers, onion, crayfish, ogiri, and seasoning cubes.",
            "Add cooked meat or fish. Stir and simmer for 15 minutes until the sauce thickens and oil rises.",
            "Stir in sliced utazi or uziza leaves in the last 3 minutes of cooking.",
            "Adjust salt and seasoning. Serve with white rice, boiled yam, or plantain."
        ]
    },
    {
        id: 10,
        name: "Nkwobi",
        category: "Soup",
        time: "90 min",
        difficulty: "Medium",
        region: "Igbo",
        image: "assets/data-images/nkwobi.jpeg",
        ingredients: [
            "1kg cow foot (nkwobi), cleaned and cut into chunks",
            "1/2 cup palm oil",
            "2 tablespoons ground ehuru (calabash nutmeg)",
            "1 tablespoon ground utazi leaves",
            "2 tablespoons ground crayfish",
            "1 teaspoon edible potash (ngu/kaun) dissolved in water",
            "3 scotch bonnet peppers, blended",
            "1 medium onion, sliced",
            "2 seasoning cubes",
            "Salt to taste"
        ],
        steps: [
            "Wash and clean cow foot thoroughly. Season with onion, seasoning cubes, and salt. Pressure cook for 45–60 minutes until very tender.",
            "Drain and set cooked cow foot aside. Reserve a little stock.",
            "Mix dissolved potash solution slowly into palm oil, stirring constantly — this emulsifies the oil to a thick yellow paste.",
            "Add blended peppers, ground ehuru, crayfish, and seasoning cubes to the palm oil paste. Mix well.",
            "Toss cooked cow foot in the spiced palm oil mixture until fully coated.",
            "Transfer to a pot and warm on low heat for 5–8 minutes, stirring gently.",
            "Garnish with sliced utazi leaves and onion rings. Serve warm as a side or with palm wine."
        ]
    },
    {
        id: 15,
        name: "Ji Mmiri Oku",
        category:"Others",
        time: "40 min",
        difficulty: "Easy",
        region: "Igbo",
        image: "assets/data-images/ji-mmiri-owu.jpeg",
        ingredients: [
            "1 medium tuber of yam, peeled and cubed",
            "1/4 cup palm oil",
            "2 tablespoons ground crayfish",
            "3 scotch bonnet peppers, blended",
            "1 medium onion, chopped",
            "Smoked fish or dried catfish, deboned",
            "1 bunch uziza or scent leaves, sliced",
            "2 seasoning cubes",
            "Salt to taste",
            "Water to cover yam"
        ],
        steps: [
            "Peel and cube yam into medium-sized chunks. Rinse well and place in a pot.",
            "Cover yam with water, add chopped onion, seasoning cubes, and salt. Cook on medium heat for 10 minutes.",
            "Add blended peppers, crayfish, palm oil, and smoked fish to the pot.",
            "Continue cooking on medium heat, stirring occasionally and mashing some yam pieces to thicken the porridge.",
            "Once yam is fully cooked and the stew is thick and well combined (about 20 more minutes), taste and adjust seasoning.",
            "Stir in sliced uziza or scent leaves in the last 2 minutes.",
            "Serve hot on its own or with fried plantain."
        ]
    },
    {
        id: 12,
        name: "Ugba na Okporoko",
        category: "Others",
        time: "30 min",
        difficulty: "Easy",
        region: "Igbo",
        image: "assets/data-images/ugba-na-okporoko.jpeg",
        ingredients: [
            "2 cups ugba (oil bean seed), sliced thin",
            "200g stockfish head (okporoko), soaked and deboned",
            "2 tablespoons palm oil",
            "1 teaspoon potash (kaun) dissolved in water",
            "2 tablespoons ground crayfish",
            "2 scotch bonnet peppers, blended or sliced",
            "1 small onion, sliced",
            "Utazi leaves, sliced thin",
            "1 seasoning cube",
            "Salt to taste"
        ],
        steps: [
            "Soak stockfish in warm water for 30 minutes. Remove bones and tear into small pieces. Season lightly and boil for 10 minutes.",
            "Rinse and slice ugba (oil bean) thinly if not pre-sliced. Place in a bowl.",
            "Mix palm oil with a few drops of dissolved potash, stirring until it thickens slightly.",
            "Add blended peppers, crayfish, seasoning cube, and salt to the palm oil mixture. Stir to combine.",
            "Toss ugba and stockfish pieces in the palm oil dressing until fully coated.",
            "Add sliced onion and utazi leaves. Toss gently and adjust seasoning.",
            "Serve at room temperature as a side dish or appetizer."
        ]
    },
    {
        id: 13,
        name: "Miyan Kuka",
        category: "Soup",
        time: "50 min",
        difficulty: "Medium",
        region: "Hausa",
        image: "assets/data-images/miyan kuka.jpeg",
        ingredients: [
            "3 tablespoons kuka powder (baobab leaf powder)",
            "500g beef or goat meat, cut into chunks",
            "200g dried fish (panla or titus)",
            "2 tablespoons dawadawa (locust bean)",
            "2 tablespoons ground crayfish",
            "4 scotch bonnet peppers, blended",
            "1 medium onion, chopped",
            "3 tablespoons groundnut oil or palm oil",
            "2 seasoning cubes",
            "Salt to taste"
        ],
        steps: [
            "Season beef with onion, seasoning cubes, and salt. Cook in a pot with water until tender. Reserve the stock.",
            "Soak dried fish in warm water for 10 minutes, debone, and set aside.",
            "Heat oil in a pot over medium heat. Fry chopped onion until golden.",
            "Add blended peppers and fry for 8–10 minutes until the raw smell disappears and oil surfaces.",
            "Add meat stock, cooked beef, fish, crayfish, and dawadawa. Stir and simmer for 10 minutes.",
            "Gradually whisk in kuka powder, stirring constantly to prevent lumps. The soup will turn grey-green.",
            "Simmer on low heat for 10–15 more minutes. Adjust seasoning and serve with tuwon shinkafa or tuwon masara."
        ]
    },
    {
        id: 14,
        name: "Miyan Taushe",
        category: "Soup",
        time: "55 min",
        difficulty: "Medium",
        region: "Hausa",
        image: "assets/data-images/miyan-taushe.jpeg",
        ingredients: [
            "2 cups pumpkin (taushe), peeled and cubed",
            "500g chicken or goat meat",
            "1/2 cup groundnut paste (groundnut soup base)",
            "2 tablespoons dawadawa (locust beans)",
            "2 tablespoons ground crayfish",
            "4 scotch bonnet peppers, blended",
            "1 bunch spinach or pumpkin leaves, sliced",
            "1 medium onion",
            "2 seasoning cubes",
            "Salt to taste"
        ],
        steps: [
            "Season and cook meat with onion, seasoning cubes, and salt until tender. Reserve stock.",
            "Boil cubed pumpkin in salted water for 10 minutes until soft. Mash or blend to a smooth paste.",
            "Heat a dry pot over medium heat. Add blended peppers and fry in a small amount of oil until reduced, about 8 minutes.",
            "Add meat stock, cooked meat, crayfish, and dawadawa. Stir and bring to a gentle boil.",
            "Stir in mashed pumpkin and groundnut paste. Mix well to combine into a thick, rich base.",
            "Simmer for 15 minutes, stirring regularly to prevent sticking at the bottom.",
            "Add sliced pumpkin leaves or spinach, stir, and cook for 3 more minutes. Serve with tuwon shinkafa."
        ]
    },
    {
        id: 11,
        name: "Suya",
        category: "Street Food",
        time: "35 min",
        difficulty: "Easy",
        region: "Hausa",
        image: "assets/data-images/suya.jpeg",
        ingredients: [
            "500g beef sirloin or chicken breast, sliced thin",
            "3 tablespoons yaji (suya spice mix)",
            "2 tablespoons groundnut powder (kuli-kuli powder)",
            "1 tablespoon groundnut oil",
            "1 teaspoon garlic powder",
            "1 teaspoon ginger powder",
            "1/2 teaspoon paprika",
            "Salt to taste",
            "Sliced onion and tomatoes for serving",
            "Skewers for grilling"
        ],
        steps: [
            "Slice beef thinly against the grain or butterfly chicken breast into flat pieces.",
            "Mix yaji spice, groundnut powder, garlic powder, ginger powder, paprika, and salt in a bowl.",
            "Coat meat thoroughly in the dry spice mix, pressing it in. Drizzle groundnut oil and mix again.",
            "Thread seasoned meat onto skewers, stretching flat for even grilling.",
            "Grill over open charcoal or a hot grill pan for 4–5 minutes per side, turning once until charred at edges.",
            "Dust with additional yaji and groundnut powder while still hot.",
            "Serve immediately with sliced onion, tomatoes, and extra yaji on the side."
        ]
    },
    {
        id: 16,
        name: "Danwake",
        category: "Street Food",
        time: "50 min",
        difficulty: "Medium",
        region: "Hausa",
        image: "assets/data-images/danwake2.jpeg",
        ingredients: [
            "2 cups bean flour (flour from black-eyed peas or honey beans)",
            "1/2 cup wheat flour",
            "1 teaspoon potash (kanwa) dissolved in 2 tablespoons water",
            "1 small onion, grated",
            "Warm water for kneading",
            "Groundnut oil for serving",
            "Yaji (suya spice) for serving",
            "Sliced cabbage or garden egg for serving",
            "Salt to taste",
            "Large pot of salted boiling water"
        ],
        steps: [
            "Mix bean flour, wheat flour, grated onion, potash water, and salt in a bowl.",
            "Gradually add warm water and knead into a firm but pliable dough — similar to play dough consistency.",
            "Bring a large pot of salted water to a rolling boil.",
            "Roll small portions of dough between palms into oval or cylindrical dumplings about 2cm long.",
            "Drop dumplings in batches into boiling water. They are done when they float to the surface, about 8–10 minutes.",
            "Remove with a slotted spoon and drain. Repeat until all dough is used.",
            "Serve in a bowl drizzled with groundnut oil, sprinkled with yaji, and accompanied by sliced cabbage or garden egg."
        ]
    },
    {
        id: 17,
        name: "Tuwon Shinkafa",
        category: "Swallow",
        time: "40 min",
        difficulty: "Easy",
        region: "Hausa",
        image: "assets/data-images/tuwom skinkafa2.jpeg",
        ingredients: [
            "2 cups local short-grain rice (shinkafa)",
            "4 cups water",
            "Salt (optional, to taste)",
            "Extra water for adjusting consistency",
            "Miyan kuka or miyan taushe for serving",
            "Cooked meat for serving"
        ],
        steps: [
            "Rinse rice thoroughly until water runs clear to remove excess starch — but not completely, as some starch is needed for the sticky texture.",
            "Place rinsed rice in a pot with 4 cups of water. Cook on medium heat until rice is very soft and overcooked, about 20 minutes.",
            "Drain any remaining surface water and begin mashing the rice vigorously with a wooden spoon or tuwo stick.",
            "Return the pot to low heat. Continue folding and pounding the rice mixture for 10–12 minutes until it becomes very smooth, thick, and stretchy.",
            "Add a small splash of hot water if it feels too stiff, or continue cooking uncovered if too loose.",
            "Shape into smooth balls using wet hands or a wet bowl. The tuwo should hold its shape and be slightly elastic.",
            "Serve immediately alongside miyan kuka, miyan taushe, or any Hausa soup of choice."
        ]
    },
    {
        id: 18,
        name: "Pounded Yam",
        category: "Swallow",
        time: "40 min",
        difficulty: "Medium",
        region: "National",
        image: "assets/data-images/poundooo.jpeg",
        ingredients: [
            "1 large tuber of white yam, peeled and cubed",
            "Water for boiling",
            "Salt to taste",
            "Egusi or vegetable soup for serving"
        ],
        steps: [
            "Peel yam, cut into chunks, and rinse under cold water.",
            "Boil yam in salted water for 20–25 minutes until completely soft and a fork pierces through with no resistance.",
            "Drain the yam thoroughly and transfer to a mortar while still very hot.",
            "Pound vigorously with a pestle, turning and folding the yam as you go. Add small splashes of hot water if it sticks.",
            "Continue pounding for 10–15 minutes until the yam is completely smooth, stretchy, and lump-free.",
            "Shape into a smooth ball using wet hands.",
            "Serve hot with egusi soup, vegetable soup, or any Nigerian soup of choice."
        ]
    },
    {
        id: 19,
        name: "Akara",
        category: "Street Food",
        time: "30 min",
        difficulty: "Easy",
        region: "Yoruba",
        image: "assets/data-images/Akara.jpeg",
        ingredients: [
            "2 cups black-eyed peas",
            "1 scotch bonnet pepper",
            "1 small onion",
            "Salt to taste",
            "Vegetable oil for deep frying",
            "Optional: 1 egg for binding"
        ],
        steps: [
            "Soak beans in water for 10 minutes, then peel off skins by rubbing between palms. Rinse until skins are mostly removed.",
            "Blend peeled beans with pepper, onion, and just enough water to get a smooth, thick batter.",
            "Transfer batter to a bowl, add salt and optional egg. Whisk vigorously for 3–5 minutes to incorporate air — this makes the akara fluffy.",
            "Heat vegetable oil in a deep pan over medium heat until hot (around 170°C).",
            "Drop spoonfuls of batter into the hot oil using a tablespoon. Do not overcrowd the pan.",
            "Fry for 3–4 minutes per side, turning once, until deep golden brown all over.",
            "Remove with a slotted spoon and drain on paper towels. Serve hot as a snack or with ogi (pap)."
        ]
    },
    {
        id: 20,
        name: "Banga Soup",
        category: "Soup",
        time: "60 min",
        difficulty: "Medium",
        region: "Delta / Ijaw",
        image: "assets/data-images/banga-soup.jpg",
        ingredients: [
            "2 cups palm fruit concentrate (fresh or canned)",
            "500g goat meat or beef",
            "200g dried catfish, deboned",
            "2 tablespoons ground crayfish",
            "1 tablespoon banga spice (oburunbebe stick, if available)",
            "1 teaspoon dried bitter leaves",
            "3 scotch bonnet peppers, blended",
            "1 medium onion",
            "2 seasoning cubes",
            "Salt to taste"
        ],
        steps: [
            "If using fresh palm fruits, boil for 20 minutes, pound, and extract juice with warm water. Strain off chaff and seeds.",
            "Pour extracted palm juice into a pot and boil on medium-high heat, stirring until it thickens and the oil separates.",
            "Season and cook meat separately with onion, seasoning, and salt. Reserve the stock.",
            "Add blended peppers, crayfish, banga spice, and meat stock to the thickened palm sauce. Stir well.",
            "Add cooked meat and dried catfish. Simmer for 20 minutes, stirring occasionally.",
            "Stir in dried bitter leaves in the last 5 minutes of cooking.",
            "Adjust seasoning and serve hot with starch, fufu, or white rice."
        ]
    },
    {
        id: 21,
        name: "Afang Soup",
        category: "Soup",
        time: "55 min",
        difficulty: "Medium",
        region: "Efik / Cross River",
        image: "assets/data-images/afang-soup.jpeg",
        ingredients: [
            "2 cups afang leaves (okazi), shredded",
            "3 cups waterleaf, chopped",
            "500g assorted meat and offal",
            "200g stockfish, soaked",
            "1/2 cup palm oil",
            "3 tablespoons ground crayfish",
            "1 tablespoon locust beans (iru)",
            "3 scotch bonnet peppers, blended",
            "1 large onion",
            "Salt and seasoning cubes to taste"
        ],
        steps: [
            "Season and cook assorted meat and stockfish with onion, seasoning cubes, and salt until tender. Reserve stock.",
            "Wash and roughly shred afang leaves. Waterleaf should be chopped and squeezed lightly to remove excess water.",
            "Heat palm oil in a pot over medium heat. Add blended peppers and fry for 8 minutes until reduced.",
            "Add meat stock, cooked meat, stockfish, crayfish, and iru. Stir and simmer for 10 minutes.",
            "Add chopped waterleaf first and stir in. Cook for 5 minutes.",
            "Add shredded afang leaves, stir thoroughly, and cook for a final 5–7 minutes.",
            "Adjust seasoning and serve with fufu, eba, or pounded yam."
        ]
    },
    {
        id: 22,
        name: "Efo Riro",
        category: "Soup",
        time: "45 min",
        difficulty: "Easy",
        region: "Yoruba",
        image: "assets/data-images/vegetable.jpeg",
        ingredients: [
            "1 large bunch shoko or spinach",
            "1/2 cup palm oil",
            "Assorted meat and ponmo",
            "Stockfish and smoked fish",
            "3 tatashe (red bell peppers)",
            "2 scotch bonnet peppers",
            "1 large onion",
            "2 tablespoons ground crayfish",
            "1 tablespoon locust beans (iru)",
            "Salt and seasoning cubes to taste"
        ],
        steps: [
            "Blend tatashe, scotch bonnet, and half the onion. Do not over-blend — keep it slightly chunky.",
            "Cook and season assorted meat and stockfish separately. Reserve the stock.",
            "Heat palm oil in a pot, fry sliced onion for 2 minutes, then add the blended pepper mix.",
            "Fry the pepper base on medium heat for 20 minutes, stirring until the water dries and oil rises.",
            "Add meat, fish, crayfish, iru, stock, and seasoning. Stir and simmer for 10 minutes.",
            "Fold in the washed and roughly sliced shoko or spinach. Cook for 3–5 minutes.",
            "Serve hot with pounded yam, eba, or amala."
        ]
    },
    {
        id: 23,
        name: "Ofada Rice and Ayamase",
        category: "Rice",
        time: "70 min",
        difficulty: "Hard",
        region: "Yoruba",
        image: "assets/data-images/ofadssss.jpeg",
        ingredients: [
            "3 cups ofada rice (Nigerian parboiled local rice)",
            "6 green bell peppers (tatase verde)",
            "4 scotch bonnet peppers",
            "1 large onion",
            "1 cup bleached palm oil",
            "Assorted offal (shaki, ponmo, kpomo)",
            "200g locust beans (iru)",
            "3 tablespoons ground crayfish",
            "2 seasoning cubes",
            "Salt to taste"
        ],
        steps: [
            "Wash ofada rice in multiple changes of water. Parboil for 10 minutes, drain, and set aside.",
            "Blend green peppers, scotch bonnet, and onion together. The pepper base should remain green.",
            "Bleach palm oil in a pot over high heat until it loses its orange colour and turns clear. Allow to cool slightly.",
            "Fry the green pepper blend in the bleached palm oil for 25–30 minutes, stirring until very dry and fragrant.",
            "Add cooked assorted meats, iru, crayfish, and seasoning. Stir and simmer for 15 minutes.",
            "In a separate pot, cook parboiled ofada rice until tender and fluffy. Season lightly.",
            "Serve ayamase stew generously over ofada rice, traditionally wrapped in banana leaves."
        ]
    },
    {
        id: 24,
        name: "Tuwo Masara",
        category: "Swallow",
        time: "30 min",
        difficulty: "Easy",
        region: "Hausa",
        image: "assets/data-images/tuwo masara.jpeg",
        ingredients: [
            "2 cups fine cornmeal (maize flour)",
            "4 cups water",
            "Salt to taste",
            "Extra hot water for adjusting consistency",
            "Miyan kuka or miyan wake for serving"
        ],
        steps: [
            "Bring 4 cups of water to a boil in a medium pot over high heat.",
            "Reduce heat to medium. Slowly pour cornmeal into boiling water in a steady stream, stirring constantly.",
            "Stir vigorously to break up any lumps as the mixture thickens.",
            "Reduce heat to low. Cover and cook for 5 minutes, then stir again thoroughly.",
            "Continue cooking and folding on low heat for 10–12 minutes until the tuwo is very smooth and pulls away from the sides.",
            "Add a splash of hot water to soften if too stiff, or cook uncovered to firm up if too loose.",
            "Shape into balls with a wet bowl or wet hands and serve hot alongside any Hausa soup."
        ]
    },
    {
        id: 25,
        name: "Pepper Soup",
        category: "Soup",
        time: "45 min",
        difficulty: "Easy",
        region: "National",
        image: "assets/data-images/peppersoup.jpeg",
        ingredients: [
            "500g goat meat, catfish, or chicken",
            "2 tablespoons pepper soup spice mix",
            "3 scotch bonnet peppers, blended",
            "1 teaspoon ground crayfish",
            "1 medium onion, chopped",
            "Utazi or scent leaves, sliced",
            "2 seasoning cubes",
            "Salt to taste",
            "Water (enough to cover the meat)"
        ],
        steps: [
            "Wash and cut meat or fish into sizeable chunks. Season with onion, salt, and seasoning cubes.",
            "Place seasoned meat in a pot with enough water to cover. Cook on medium heat for 15 minutes.",
            "Add blended scotch bonnet peppers, pepper soup spice mix, and crayfish. Stir well.",
            "Continue cooking on medium heat for 20–25 minutes until meat is tender and broth is deeply flavoured.",
            "Taste and adjust salt and seasoning. The broth should be clear, peppery, and aromatic.",
            "Add sliced utazi or scent leaves in the last 2 minutes.",
            "Serve hot in a bowl on its own or with boiled yam, plantain, or white rice."
        ]
    },
    {
        id: 26,
        name: "Nigerian Fried Plantain",
        category: "Snack",
        time: "15 min",
        difficulty: "Easy",
        region: "National",
        image: "assets/data-images/fried plantain.jpeg",
        ingredients: [
            "2 ripe plantains (yellow with black spots for sweetness)",
            "Vegetable oil for frying",
            "Pinch of salt (optional)"
        ],
        steps: [
            "Peel plantains and slice diagonally into pieces about 1cm thick.",
            "Lightly sprinkle with salt if desired.",
            "Heat vegetable oil in a frying pan over medium heat — enough oil to come halfway up the plantain slices.",
            "Carefully place plantain slices in the hot oil in a single layer. Do not overcrowd.",
            "Fry for 2–3 minutes until the underside is golden brown, then flip with a spatula.",
            "Fry the other side for another 2 minutes until deep golden and slightly caramelised at the edges.",
            "Remove and drain on paper towels. Serve immediately as a side with rice, beans, or egg stew."
        ]
    },
    {
        id: 27,
        name: "Oha Soup",
        category: "Soup",
        time: "60 min",
        difficulty: "Medium",
        region: "Igbo",
        image: "assets/data-images/oha soup.jpeg",
        ingredients: [
            "2 cups oha (ora) leaves, hand-shredded",
            "500g assorted meat (goat, cow tail, tripe)",
            "200g stockfish, soaked",
            "3 tablespoons cocoyam paste (ofor) for thickening",
            "1/2 cup palm oil",
            "2 tablespoons ground crayfish",
            "1 tablespoon ogiri okpei (locust bean paste)",
            "3 scotch bonnet peppers, blended",
            "1 large onion",
            "Salt and seasoning cubes to taste"
        ],
        steps: [
            "Season and cook assorted meat and stockfish with onion, seasoning cubes, and salt until tender. Reserve stock.",
            "Heat palm oil in a pot over medium heat. Add blended peppers and fry for 8–10 minutes until oil rises.",
            "Add meat stock, cooked meat, stockfish, crayfish, and ogiri. Stir and simmer for 10 minutes.",
            "Dissolve cocoyam paste (ofor) in a cup of warm water and stir into the pot to thicken.",
            "Simmer on low heat for 5 minutes, stirring regularly until the soup reaches a smooth, rich consistency.",
            "Hand-shred oha leaves gently (never cut with a knife — it darkens them) and stir into the soup.",
            "Cook for a final 3–4 minutes. Adjust seasoning and serve with fufu or eba."
        ]
    },
    {
        id: 28,
        name: "Nigerian Beans and Plantain",
        category: "Others",
        time: "50 min",
        difficulty: "Easy",
        region: "National",
        image: "assets/data-images/beans&plantain.jpeg",
        ingredients: [
            "2 cups honey beans or black-eyed peas",
            "1/4 cup palm oil",
            "1 medium onion, chopped",
            "2 scotch bonnet peppers, blended",
            "2 tablespoons ground crayfish",
            "Smoked fish or stockfish (optional)",
            "2 seasoning cubes",
            "Salt to taste",
            "2 ripe plantains, fried (see recipe 26)"
        ],
        steps: [
            "Pick and wash beans. Soak in water for 30 minutes to reduce cook time.",
            "Drain and cook beans in fresh water over medium heat for 30–40 minutes until soft but not mushy.",
            "In a separate small pot, heat palm oil and fry chopped onion for 2 minutes.",
            "Add blended peppers and fry on medium heat for 8–10 minutes until reduced and fragrant.",
            "Pour the fried pepper base into the cooked beans. Add crayfish, smoked fish, seasoning cubes, and salt.",
            "Stir well and simmer on low heat for 10–15 minutes until flavours are well absorbed.",
            "Serve hot alongside fried plantain slices."
        ]
    },
    {
        id: 29,
        name: "Gizdodo",
        category: "Snacks",
        time: "40 min",
        difficulty: "Easy",
        region: "National",
        image: "assets/data-images/gizdodo.jpeg",
        ingredients: [
            "500g chicken gizzards, cleaned",
            "2 ripe plantains, cut into chunks",
            "2 red bell peppers (tatashe), blended",
            "2 scotch bonnet peppers",
            "1 medium onion, sliced",
            "3 tablespoons vegetable oil",
            "1 teaspoon curry powder",
            "1 teaspoon thyme",
            "2 seasoning cubes",
            "Salt to taste"
        ],
        steps: [
            "Season gizzards with curry, thyme, seasoning cubes, salt, and half the onion. Cook in a little water for 20 minutes until tender.",
            "Deep fry or pan-fry cooked gizzards in hot oil until brown and slightly crispy on the outside. Set aside.",
            "In the same oil, fry plantain chunks until golden brown on all sides. Set aside.",
            "Drain excess oil from the pan, leaving about 2 tablespoons. Fry sliced onion for 1 minute.",
            "Add blended peppers and fry for 8–10 minutes until reduced and the raw smell is gone.",
            "Toss in fried gizzards and plantain. Stir gently to coat everything in the sauce.",
            "Simmer for 5 minutes until flavours meld together. Serve as a side or party appetizer."
        ]
    },
    {
        id: 30,
        name: "Okra Soup",
        category: "Soup",
        time: "35 min",
        difficulty: "Easy",
        region: "National",
        image: "assets/data-images/okra-soup.jpeg",
        ingredients: [
            "500g fresh okra, finely sliced or grated",
            "500g assorted meat or seafood (shrimp, fish, goat)",
            "1/2 cup palm oil",
            "2 tablespoons ground crayfish",
            "3 scotch bonnet peppers, blended",
            "1 medium onion",
            "1 tablespoon locust beans (iru or dawadawa)",
            "Spinach or uziza leaves (optional)",
            "2 seasoning cubes",
            "Salt to taste"
        ],
        steps: [
            "Season and cook assorted meat or seafood with onion, seasoning cubes, and salt. Reserve the stock.",
            "Heat palm oil in a pot over medium heat. Add blended peppers and fry for 8 minutes until oil surfaces.",
            "Add meat stock, cooked meat or seafood, crayfish, iru, and seasoning. Stir and bring to a simmer.",
            "Add sliced or grated okra all at once and stir immediately. The soup will begin to thicken and draw.",
            "Cook on medium heat for 5–7 minutes, stirring gently — avoid over-stirring which breaks down the draw.",
            "Add spinach or uziza leaves if using, stir in, and cook for 2 more minutes.",
            "Serve hot with pounded yam, eba, fufu, or rice."
        ]
    }
];
