exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Chocolate Chip Cookie", dishId: 1 },
        { name: "Guacamole", dishId: 3 },
        { name: "Mango Strawberry Smoothie", dishId: 2 }
        { name: "Spinach Dip", dishId: 3 },
      ]);
    });
};
