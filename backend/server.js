const express = require('express')

//init express app
const app = express()

// route handler
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to Atr Skin Care E-Commerce Shop'})
})

// listen for requests
app.listen(4000, () => {
    console.log('Listening on port 4000')
})