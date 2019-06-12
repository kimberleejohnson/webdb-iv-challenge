// Update with your config settings.
// Deleted everything but development requirements for this beginner project 

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipeBook.db3',
    },
    useNullAsDefault: true // needed for sqlite 
  },
};
