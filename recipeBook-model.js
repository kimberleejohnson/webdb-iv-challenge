const knex = require('knex'); 

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/recipeBook.db3'
    }, 
    useNullAsDefault: true, 
}

const db = knex(knexConfig); 

module.exports = {
    getDishes, 
    addDish, 
    getDish, 
    getRecipes, 
    addRecipe
}

function getDishes() {
    return db('dishes')
}

function getDish(id) {
    return db('dishes')
    .where({ id })
    .first(); 
}

function addDish(dish) {
    return db('dishes')
    .insert(dish, 'id')
}

function getRecipes() {
    return db('recipes').leftJoin('dishes', 'recipes.dish_id', 'dishes.id'); 
}

function addRecipe(recipe) {
    return db('recipes')
    .insert(recipe, 'id')
}