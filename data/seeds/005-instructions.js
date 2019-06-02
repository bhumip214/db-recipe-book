exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          stepNo: "1",
          step: "Note: This dough requires chilling.",
          recipeId: 1
        },
        {
          stepNo: "2",
          step:
            "Place melted butter in the bowl of a stand mixer fitted with the paddle attachment (or a large bowl if using a hand mixer). Add granulated and brown sugars and mix on low speed until the mixture is smooth. Mix in egg and vanilla extract and mix on medium speed until combined.",
          recipeId: 1
        },
        {
          stepNo: "3",
          step:
            "Mix in baking soda and salt, then slowly mix in flour and mix just until the batter is smooth and comes together. Be sure to scrape the sides of the bowl during mixing. Slowly mix in chocolate chips.",
          recipeId: 1
        },
        {
          stepNo: "4",
          step:
            "Line a cookie sheet with a silicone baking mat or parchment paper. Scoop 2 tablespoon balls of dough onto the cookie sheet. Spacing doesn’t matter because you will be chilling the dough. Cover with plastic wrap and chill for at least 2 hours.",
          recipeId: 1
        },
        {
          stepNo: "5",
          step:
            "Preheat oven to 350°F. Line a second cookie sheet with parchment paper or a silicone baking mat.",
          recipeId: 1
        },
        {
          stepNo: "6",
          step:
            "Remove the chilled cookie dough balls from the refrigerator and space them 2-inches apart on the cookie sheets. Bake (2 tablespoon sized cookies) for 11-15 minutes, or until the edges are a light golden and the tops are no longer glossy. Let cool on the cookie sheets at least 10 minutes before removing.",
          recipeId: 1
        }
      ]);
    });
};
