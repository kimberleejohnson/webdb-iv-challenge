
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, dish_id: 1, name: 'Sicilian', recipe_instructions: 'Bake the Sicilian pizza.'},
        {id: 2, dish_id: 1, name: 'Margarita', recipe_instructions: 'Make the Margarita pizza.'},
        {id: 3, dish_id: 2, name: 'Carne asada', recipe_instructions: 'Make the carne asada tacos.'},
        {id: 4, dish_id: 2, name: 'Roasted corn', recipe_instructions: 'Make the roasted corn tacos.'},
        {id: 5, dish_id: 3,name: 'Cinnamon Crunch', recipe_instructions: 'Make the cinnamon crunch bread.'},
        {id: 6, dish_id: 3, name: 'Dutch Crunch', recipe_instructions: 'Make the dutch crunch bread.'}
      ]);
    });
};
