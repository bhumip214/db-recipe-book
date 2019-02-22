exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { quantity: "0.5", measurement: "cup", recipeId: 1, ingredientId: 1 },
        { quantity: "1.5", measurement: "cups", recipeId: 1, ingredientId: 2 },
        {
          quantity: "0.5",
          measurement: "teaspoon",
          recipeId: 1,
          ingredientId: 3
        },
        { quantity: "1.5", measurement: "cups", recipeId: 1, ingredientId: 4 },
        {
          quantity: "1",
          measurement: "teaspoon",
          recipeId: 1,
          ingredientId: 5
        },
        { quantity: "0.5", measurement: "cup", recipeId: 1, ingredientId: 6 },
        { quantity: "104", measurement: "grams", recipeId: 1, ingredientId: 7 },
        { quantity: "1", measurement: "large", recipeId: 1, ingredientId: 8 }
      ]);
    });
};
