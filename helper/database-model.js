const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {
  return db("dishes");
}

function addDish(dish) {
  return db("dish").insert(dish);
}

function getDish(id) {
  dish = db("dishes")
    .where({ id })
    .first();
  return dish;
}

function getRecipes() {
  return db("recipes")
    .select(
      "dishes.name as Dish",
      "recipes.id as RecipeId",
      "recipes.name ad Recipe"
    )
    .from("recipes")
    .innerJoin("dishes", "dishes.id", "recipes.dishId");
}

function addRecipe(recipe) {
  return db("recipes").insert(recipe);
}
