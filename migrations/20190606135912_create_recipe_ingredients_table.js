// Naming my schema 
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', function(tbl) {
        // Primary key for recipe_ingredients id
        tbl.increments(); 

        // Foreign key for dish id 
        tbl.integer('dish_id').unsigned().references('id').inTable('dishes').onDelete('CASCADE').onUpdate('CASCADE');
        
        // Foreign key for recipe id 
        tbl.integer('recipe_id').unsigned().references('id').inTable('recipes').onDelete('CASCADE').onUpdate('CASCADE');

        // Foreign key for ingredient id 
        tbl.integer('ingredient_id').unsigned().references('id').inTable('ingredients').onDelete('CASCADE').onUpdate('CASCADE');

        // Foreign key for ingredient name 
        tbl.string('ingredient_name').unsigned().references('ingredient_name').inTable('ingredients').onDelete('CASCADE').onUpdate('CASCADE');

        // Quantity required as a floating number 
        // I'm keeping unique out of this one becuase I see a world where quantities repeat
        tbl.float('quantity').notNullable(); 
    })
};

// What we'll use if we need to delete anything
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredients');
};
