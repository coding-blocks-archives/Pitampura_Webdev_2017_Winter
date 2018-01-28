const route = require('express').Router()
const ctrl = require('../controllers/products')

// Get all products
// ?sortBy=priceLow or ?sortBy=priceHigh
// ?sortBy=latest or ?sortBy=oldest
route.get('/', (req, res) => {
    ctrl.getAllProducts(req.query)
        .then((products) =>
                res.status(200).json(products)
            // res.status(200).render(viewname, {products})
        )
        .catch((err) =>
            res.status(500).json({message: err.message})
        )
})

// Add a new product
route.post('/', (req, res) => {
    ctrl.addProduct(req.body)
        .then((addedProduct) =>
                res.status(201).json(addedProduct)
            // res.redirect('/products')
        )
        .catch((err) =>
            res.status(500).json({message: err.message})
        )
})



exports = module.exports = route