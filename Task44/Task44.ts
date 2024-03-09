const make_sandwich = (...myIngredients: string []) => {
    console.log("Summary of the sandwich ingredients:");

    for(let i:number = 0; i < myIngredients.length; i++) {
        let ingredient: number = i+1;
        console.log(`Ingredient ${ingredient}: ${myIngredients[i]}`);
    }
}

make_sandwich("Potato", "Onion", "Bun");

make_sandwich("Potato", "Onion", "Bun", "Chicken", "Butter");

make_sandwich("Potato", "Bun");