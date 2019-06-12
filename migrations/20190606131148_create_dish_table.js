// New changes to the database schema 
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {
      // priority key called id, autoincrements, integer
      tbl.increments(); 

      // varchar called dish_name 255 characters long, unique, not null 
      tbl.string('dish_name', 255).notNullable().unique(); 
  })
};

// How to undo changes to the schema if we need 
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes'); 
};
