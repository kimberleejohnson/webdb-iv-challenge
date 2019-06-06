// Requiring all my dependencies 
const express = require('express'); 
const helmet = require('helmet');

// Pulling in my model 
const RecipeBook = require('./recipeBook-model.js'); 

// Defining my server
const server = express(); 

// Saying my server will use certain middleware
server.use(helmet()); 
server.use(express.json()); 

// ROUTES 

// Getting all my dishes to make sure the data was built
server.get('/dishes', async (req, res) => {
        RecipeBook.getDishes().then(dishes => {
            res.status(200).json(dishes);
        })
        .catch(error => {
            res.status(500).json(error); 
        })
})

// Getting all recipes to make sure data saved
server.get('/recipes', async (req, res) => {
    RecipeBook.getRecipes().then(recipes => {
        res.status(200).json(recipes); 
    })
    .catch(error => {
        res.status(500).json(error); 
    })
})

// Adding a dish to make sure export works 
server.post('/dishes', (req, res) => {
    RecipeBook.addDish(req.body, 'id').then(ids => {
        res.status(201).json(ids);
    }).catch(error => {
        res.status(500).json(error); 
    })
})

// 

// Telling my server where to listen 
const port = process.env.PORT || 5000; 
server.listen(port, () => 
console.log(`\n** API running on http://localhost:${port} **\n`)
); 