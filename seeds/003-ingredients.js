exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Unsalted Butter melted" },
        { name: "All purpose flour" },
        { name: "Baking soda" },
        { name: "Chocolate chips" },
        { name: "Vanilla extract" },
        { name: "Light brown sugar" },
        { name: "Granulated sugar" }
        { name: "Eggs" }
      ]);
    });
};
