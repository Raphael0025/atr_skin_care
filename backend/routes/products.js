const express = require('express')

const {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/productController')

const router = express.Router()

// Get all products
router.get('/', getProducts)

// get single product
router.get('/:id', getProduct)

// Post new Product
router.post('/', createProduct)

// Delete a Product
router.delete('/:id', deleteProduct)

// Update a Product
router.patch('/:id', updateProduct)

module.exports = router