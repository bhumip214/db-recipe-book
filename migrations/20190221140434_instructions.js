exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", function(tbl) {
    tbl.increments();

    tbl.integer("stepNo").notNullable();

    tbl.text("step", 500).notNullable();

    tbl
      .integer("recipeId")
      .unsigned()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("instructions");
};
