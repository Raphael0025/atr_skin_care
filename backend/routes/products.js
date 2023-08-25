const express = require('express')
const router = express.Router()

// Get all products
router.get('/', (req, res) => {
    res.json({mssg: 'Get all Products'})
})

// get single product
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get single product'})
})

// Post new Product
router.post('/', (req, res) => {
    
    res.json({mssg: 'Post new product'})
})

// Delete a Product
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Product Deleted'})
})

// Update a Product
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Product Updated'})
})

module.exports = router