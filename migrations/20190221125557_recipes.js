exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(tbl) {
    tbl.increments();

    tbl.string("name", 128).notNullable();

    tbl
      .integer("dishId")
      .unsigned()
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
