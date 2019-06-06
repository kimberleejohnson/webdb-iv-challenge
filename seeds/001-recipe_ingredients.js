
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {id: 1, dish_id: 2, recipe_id: 3, ingredient_id: 1, ingredient_name: 'tortillas', quantity: 12},

        {id: 2, dish_id: 2, recipe_id: 4, ingredient_id: 1, ingredient_name: 'tortillas', quantity: 16},

        {id: 3, dish_id: 1, recipe_id: 2, ingredient_id: 6, ingredient_name: 'basil', quantity: 5},

        {id: 4, dish_id: 3, recipe_id: 5, ingredient_id: 7, ingredient_name: 'cinnamon', quantity: 100},

        {id: 5, dish_id: 3, recipe_id: 5, ingredient_id: 3, ingredient_name: 'butter', quantity: 50}

      ]);
    });
};
