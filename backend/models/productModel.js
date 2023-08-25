const mongoose = require('mongoose')

// Initialize Schema model
const Schema = mongoose.Schema

// Create product Schema
const productsSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    unit_price: {
        type: Number,
        required: true
    }
}, {timestamps: true})

//Create and export the model for the product schema
module.exports = mongoose.model('Product', productsSchema)
