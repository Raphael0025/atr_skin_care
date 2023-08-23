require('dotenv').config()

const express = require('express')

//init express app
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// route handler
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to Atr Skin Care E-Commerce Shop'})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})

