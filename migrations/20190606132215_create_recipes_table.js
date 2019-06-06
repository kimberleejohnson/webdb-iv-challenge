// Adding database schema 
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {

        // primary key: recipe_id 
        tbl.increments(); 

        // dish_id: foreign key that references id in dishes table
        tbl.integer('dish_id').unsigned().references('id').inTable('dishes').onDelete('CASCADE').onUpdate('CASCADE');

        // recipe_name: 128 characters long, unique, not null 
        tbl.string('name', 128).notNullable().unique(); 

        // recipe_instructions: varchar, holds 2000 characters, unique, not null 
        tbl.string('recipe_instructions', 2000).notNullable().unique(); 

    })
};

// Describing what happens if we try to delete from table
exports.down = function(knex, Promise) {
  
};
