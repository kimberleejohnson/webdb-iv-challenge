// Adding database schema 
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {
        // Primary key for ingredients id
        tbl.increments(); 

        // Ingredient_name 
        tbl.string('ingredient_name', 128).notNullable().unique(); 
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients'); 
};
