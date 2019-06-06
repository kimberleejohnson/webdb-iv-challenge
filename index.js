// Requiring all my dependencies 
const express = require('express'); 
const helmet = require('helmet'); 
const knex = require('knex');

// Setting up knexConfig, since I already called npx knex init 
const knexConfig = require('./knexfile.js')

// Defining my database as the development part of my knex file 
const db = knex(knexConfig.development); 

// Defining my server
const server = express(); 

// Saying my server will use certain middleware
server.use(helmet()); 
server.use(express.json()); 

// ROUTES TBD 
server.get('/dishes', async (req, res) => {
    try {
        const dishes = await db('dishes'); // all the dishes
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json(error); 
    }
})

// 

// Telling my server where to listen 
const port = process.env.PORT || 5000; 
server.listen(port, () => 
console.log(`\n** API running on http://localhost:${port} **\n`)
); 