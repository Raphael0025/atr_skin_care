const Product = require('../models/productModel')
const mongoose = require('mongoose')

// Get all products
const getProducts = async (req, res) => {
    const products = await Product.find({}).sort({createdAt: -1})
    res.status(200).json(products)
}

// get single product
const getProduct = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Product'})
    }

    const product = await Product.findById(id)

    if(!product){
        return res.status(404).json({error: 'No such Product'})
    }
    res.status(200).json(product)
}

// Post new Product
const createProduct = async (req, res) => {
    const {item, stock, unit_price} = req.body

    // add doc to db
    try{
        const product = await Product.create({item, stock, unit_price})
        res.status(200).json(product)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// Delete a Product
const deleteProduct = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Product'})
    }

    const product = await Product.findOneAndDelete({_id: id})

    if(!product){
        return res.status(400).json({error: 'No such Product to remove'})
    }
    res.status(200).json(product)
}

// Update a Product
const updateProduct = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Product'})
    }

    const product = await Product.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!product){
        return res.status(400).json({error: 'No such Product to update'})
    }
    res.status(200).json(product)
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}