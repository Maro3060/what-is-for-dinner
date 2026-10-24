var recipes = [
    {
        image: "images/photo-1559314809-0d155014e29e.jpeg",
        recipeName: "Pad Thai",
        recipeDesc: "Popular Thai stir-fried noodles with shrimp and peanuts",
        rate: 4.8,
        reviews: 445,
        prepTime: "20 min",
        cookTime: "15 min",
        servings: "2 people",
        level: "Intermediate",
        type: "Asian",
        ingredients : [
            "200g rice noodles",
            "200g shrimp, peeled",
            "2 eggs",
            "3 tablespoons tamarind paste",
            "2 tablespoons fish sauce",
            "1 tablespoon palm sugar",
            "Bean sprouts",
            "Crushed peanuts",
            "Lime wedges and cilantro"
        ],
        instructions: [
            "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
            "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
            "Heat wok over high heat. Scramble eggs and set aside.",
            "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
            "Add scrambled eggs and bean sprouts. Toss everything together.",
            "Serve topped with crushed peanuts, lime wedges, and cilantro.",
        ],
        nutrations: {
            calories: "540 kcal",
            protein: "32g",
            carbohydrates: "62g",
            fat: "16g",
            fiber: "4g",
            Sodium: "1120mg"
        },
        tips: [
            "Don't oversoak noodles or they'll be mushy",
            "Cook on high heat for authentic wok flavor",
            "Balance sweet, sour, and salty flavors",
            "Prepare all ingredients before starting to cook"
        ],
        warning: false
    },
    {
        image: "images/photo-1529692236671-f1f6cf9683ba.jpeg",
        recipeName: "BBQ Pulled Pork",
        recipeDesc: "Slow-cooked tender pork in smoky barbecue sauce",
        rate: 4.7,
        reviews: 412,
        prepTime: "15 min",
        cookTime: "240 min",
        servings: "4 people",
        level: "Easy",
        type: "American",
        ingredients : [
            "1kg pork shoulder",
            "1 cup BBQ sauce",
            "1/2 cup apple cider vinegar",
            "2 tablespoons brown sugar",
            "1 tablespoon paprika",
            "1 tablespoon garlic powder",
            "Burger buns",
            "Coleslaw for serving",
        ],
        instructions: [
            "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
            "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
            "Remove pork and shred with two forks. Discard excess fat.",
            "Return shredded pork to slow cooker, mix with BBQ sauce.",
            "Serve on toasted buns with coleslaw on top.",
        ],
        nutrations: {
            calories: "620 kcal",
            protein: "48g",
            carbohydrates: "52g",
            fat: "22g",
            fiber: "3g",
            Sodium: "1180mg"
        },
        tips: [
            "Use pork shoulder for best results - it stays moist",
            "Let pork rest before shredding for juicier meat",
            "Make your own BBQ sauce for better flavor",
            "Leftovers freeze well for up to 3 months"
        ],
        warning: true
    },
    {
        image: "images/photo-1603133872878-684f208fb84b.jpeg",
        recipeName: "Chicken Stir-Fry",
        recipeDesc: "Quick and healthy stir-fry with colorful vegetables",
        rate: 4.5,
        reviews: 324,
        prepTime: "15 min",
        cookTime: "15 min",
        servings: "4 people",
        level: "Easy",
        type: "Asian",
        ingredients : [
            "500g chicken breast, sliced",
            "2 bell peppers, sliced",
            "1 broccoli head, florets",
            "2 carrots, julienned",
            "3 tablespoons soy sauce",
            "2 tablespoons oyster sauce",
            "1 tablespoon sesame oil",
            "2 cloves garlic, minced",
            "Fresh ginger, grated"
        ],
        instructions: [
            "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
            "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
            "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
            "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
            "Serve immediately over steamed rice or noodles.",
        ],
        nutrations: {
            calories: "320 kcal",
            protein: "34g",
            carbohydrates: "18g",
            fat: "12g",
            fiber: "5g",
            Sodium: "840mg"
        },
        tips: [
            "Cut all ingredients before starting to cook",
            "Keep heat high for authentic stir-fry texture",
            "Don't overcrowd the wok or vegetables will steam",
            "Add cashews or peanuts for extra crunch"
        ],
        warning: false
    },
    {
        image: "images/photo-1565557623262-b51c2513a641.jpeg",
        recipeName: "Chicken Tikka Masala",
        recipeDesc: "Rich and creamy Indian curry with tender chicken pieces",
        rate: 4.7,
        reviews: 389,
        prepTime: "20 min",
        cookTime: "30 min",
        servings: "4 people",
        level: "Intermediate",
        type: "Asian",
        ingredients : [
            "600g chicken breast, cubed",
            "2 bell peppers, sliced",
            "1 cup plain yogurt",
            "2 tablespoons tikka masala paste",
            "400ml coconut cream",
            "1 onion, diced",
            "4 cloves garlic, minced",
            "400g canned tomatoes",
            "Fresh cilantro for garnish"
        ],
        instructions: [
            "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
            "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
            "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
            "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
            "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
        ],
        nutrations: {
            calories: "450 kcal",
            protein: "38g",
            carbohydrates: "24g",
            fat: "22g",
            fiber: "4g",
            Sodium: "760mg"
        },
        tips: [
            "Marinate chicken overnight for deeper flavor",
            "Use full-fat coconut cream for richest sauce",
            "Adjust spice level by varying the tikka paste amount",
            "Serve with naan bread and basmati rice"
        ],
        warning: true
    },
    {
        image: "images/photo-1565299585323-38d6b0865b47.jpeg",
        recipeName: "Beef Tacos",
        recipeDesc: "Flavorful Mexican tacos with seasoned ground beef",
        rate: 4.6,
        reviews: 278,
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "4 people",
        level: "Easy",
        type: "American",
        ingredients : [
            "500g ground beef",
            "8 taco shells",
            "1 onion, diced",
            "2 tablespoons taco seasoning",
            "Shredded lettuce",
            "Diced tomatoes",
            "Shredded cheddar cheese",
            "Sour cream",
            "Salsa"
        ],
        instructions: [
            "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
            "Add diced onion and cook until softened, about 5 minutes.",
            "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
            "Warm taco shells according to package directions.",
            "Fill each shell with seasoned beef.",
            "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately."
        ],
        nutrations: {
            calories: "420 kcal",
            protein: "26g",
            carbohydrates: "32g",
            fat: "20g",
            fiber: "4g",
            Sodium: "780mg"
        },
        tips: [
            "Drain excess fat from beef for healthier tacos",
            "Warm shells in oven for better texture",
            "Prepare all toppings before cooking beef",
            "Use ground turkey for a lighter option"
        ],
        warning: false
    },
];
var cardHead = document.getElementById("card-header");
var imgPart = document.getElementById("left-side");
var ingredients = document.getElementById("ingreddients-element");
var instructions = document.getElementById("instruction");
var nutrations = document.getElementById("nutrition")
var tip = document.getElementById("tips");

function getRecipe() {
    var random = Math.floor(Math.random() * recipes.length);
    var blackBox = "";
    var blackBox2 = "";
    var blackBox3 = "";
    cardHead.innerHTML = `
    <div class="category d-flex column-gap-2">
                      <div
                        class="level px-3 rounded-5 d-flex align-items-center"
                      >
                        <span>${recipes[random].level}</span>
                      </div>
                      <div
                        class="type px-3 py-1 rounded-5 d-flex align-items-center"
                      >
                        <span>${recipes[random].type}</span>
                      </div>
                    </div>
                    <div class="recipe-name">
                      <h2>${recipes[random].recipeName}</h2>
                      <p>${recipes[random].recipeDesc}</p>
                    </div>
    `;

    imgPart.innerHTML = `
    <div
                class="rate position-absolute z-2 rounded-pill py-2 px-3 d-flex align-items-center justify-content-center column-gap-2"
              >
                <i class="fa-solid fa-star"></i>
                ${recipes[random].rate}
                <span>(${recipes[random].reviews} reviews)</span>
              </div>
              <div
                class="recipe-details z-2 position-absolute bottom-0 start-0 end-0 mx-3 bg-white mb-3 d-flex justify-content-around column-gap-2 column-gap-lg-4 p-2 p-lg-4 rounded-4"
              >
                <div
                  class="time d-flex flex-column row-gap-1 align-items-center"
                >
                  <i class="fa-solid fa-clock fs-4"></i>
                  <span>Prep Time</span>
                  <span>${recipes[random].prepTime}</span>
                </div>
                <div
                  class="cook-time d-flex flex-column row-gap-1 align-items-center"
                >
                  <i class="fa-solid fa-fire-burner fs-4"></i>
                  <span>Cook Time</span>
                  <span>${recipes[random].cookTime}</span>
                </div>
                <div
                  class="surving d-flex flex-column row-gap-1 align-items-center"
                >
                  <i class="fa-solid fa-users fs-4"></i>
                  <span>Servings</span>
                  <span>${recipes[random].servings}</span>
                </div>
              </div>
              <img
                src="${recipes[random].image}"
                alt="recipe image"
                class="img-fluid w-100 h-100"
              />
    `;
    
    for(var i = 0; i < recipes[random].ingredients.length; i++) {
        blackBox += `
        <div
                          class="ingreddients-step d-flex column-gap-2" 
                        >
                          <div
                            class="step-number text-white rounded-circle d-flex justify-content-center align-items-center"
                            
                          >
                            ${i+1}
                          </div>
                          ${recipes[random].ingredients[i]}
                        </div>
        `;
    }
    ingredients.innerHTML = blackBox;

    for(var i = 0; i < recipes[random].instructions.length; i++) {
        blackBox2 += `
        <div class="instruction-step d-flex align-items-center column-gap-2">
                          <div
                            class="instruction-num text-white d-flex align-items-center justify-content-center rounded-4"
                          >
                            ${i+1}
                          </div>
                          <span
                            >${recipes[random].instructions[i]}</span
                          >
                        </div>
        ` ;
    }
    instructions.innerHTML = blackBox2 
    
    nutrations.innerHTML = `
    <div
                          class="nutration-box d-flex align-items-center justify-content-between p-3 rounded-4 w-45"
                        >
                          <div
                            class="nutration-info d-flex align-items-center column-gap-2"
                          >
                            <div
                              class="nutration-icon calories-icon d-flex align-items-center justify-content-center rounded-3"
                            >
                              <i class="fa-solid fa-fire"></i>
                            </div>
                            <span class="fw-medium">Calorie</span>
                          </div>
                          <div class="nutration-data">
                            <span>${recipes[random].nutrations.calories}</span>
                          </div>
                        </div>
                        <div
                          class="nutration-box d-flex align-items-center justify-content-between p-3 rounded-4 w-45"
                        >
                          <div
                            class="nutration-info d-flex align-items-center column-gap-2"
                          >
                            <div
                              class="nutration-icon protine-icon d-flex align-items-center justify-content-center rounded-3"
                            >
                              <i class="fa-solid fa-dumbbell"></i>
                            </div>
                            <span class="fw-medium">Protein </span>
                          </div>
                          <div class="nutration-data">
                            <span>${recipes[random].nutrations.protein}</span>
                          </div>
                        </div>
                        <div
                          class="nutration-box d-flex align-items-center justify-content-between p-3 rounded-4 w-45"
                        >
                          <div
                            class="nutration-info d-flex align-items-center column-gap-2"
                          >
                            <div
                              class="nutration-icon carbohydrates-icon calories-icon d-flex align-items-center justify-content-center rounded-3"
                            >
                              <i class="fa-solid fa-wheat-awn"></i>
                            </div>
                            <span class="fw-medium">Carbohydrates</span>
                          </div>
                          <div class="nutration-data">
                            <span>${recipes[random].nutrations.carbohydrates}</span>
                          </div>
                        </div>
                        <div
                          class="nutration-box d-flex align-items-center justify-content-between p-3 rounded-4 w-45"
                        >
                          <div
                            class="nutration-info d-flex align-items-center column-gap-2"
                          >
                            <div
                              class="nutration-icon fat-icon d-flex align-items-center justify-content-center rounded-3"
                            >
                              <i class="fa-solid fa-droplet"></i>
                            </div>
                            <span class="fw-medium">Fat</span>
                          </div>
                          <div class="nutration-data">
                            <span>${recipes[random].nutrations.fat}</span>
                          </div>
                        </div>
                        <div
                          class="nutration-box d-flex align-items-center justify-content-between p-3 rounded-4 w-45"
                        >
                          <div
                            class="nutration-info d-flex align-items-center column-gap-2"
                          >
                            <div
                              class="nutration-icon fiber-icon calories-icon d-flex align-items-center justify-content-center rounded-3"
                            >
                              <i class="fa-solid fa-seedling"></i>
                            </div>
                            <span class="fw-medium">Fiber</span>
                          </div>
                          <div class="nutration-data">
                            <span>${recipes[random].nutrations.fiber}</span>
                          </div>
                        </div>
                        <div
                          class="nutration-box d-flex align-items-center justify-content-between p-3 rounded-4 w-45"
                        >
                          <div
                            class="nutration-info d-flex align-items-center column-gap-2"
                          >
                            <div
                              class="nutration-icon sodium-icon d-flex align-items-center justify-content-center rounded-3"
                            >
                              <i class="fa-solid fa-cube"></i>
                            </div>
                            <span class="fw-medium">Sodium</span>
                          </div>
                          <div class="nutration-data">
                            <span>380 kcal</span>
                          </div>
                        </div>
    `;

    for(var i = 0; i < recipes[random].tips.length; i++) {
        blackBox3 += `
        <div class="chef-tip-box p-4 rounded-4">
                          <i class="fa-solid fa-circle-check"></i>
                          ${recipes[random].tips[i]}
                        </div>
        `;
    }
    tip.innerHTML = blackBox3
}

getRecipe();