
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'tortillas'},
        {id: 2, ingredient_name: 'flour'},
        {id: 3, ingredient_name: 'butter'}, 
        {id: 4, ingredient_name: 'tomatos'},
        {id: 5, ingredient_name: 'cheese'},
        {id: 6, ingredient_name: 'basil'},
        {id: 7, ingredient_name: 'cinnamon'}
      ]);
    });
};
