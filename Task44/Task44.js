"use strict";
const make_sandwich = (...myIngredients) => {
    console.log("Summary of the sandwich ingredients:");
    for (let i = 0; i < myIngredients.length; i++) {
        let ingredient = i + 1;
        console.log(`Ingredient ${ingredient}: ${myIngredients[i]}`);
    }
};
make_sandwich("Potato", "Onion", "Bun");
make_sandwich("Potato", "Onion", "Bun", "Chicken", "Butter");
make_sandwich("Potato", "Bun");
