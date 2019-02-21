exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_ingredients", function(tbl) {
    tbl.increments();

    tbl.float("quantity");

    tbl
      .integer("recipeId")
      .unsigned()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("ingredientId")
      .unsigned()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_ingredients");
};
