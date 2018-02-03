const route = require('express').Router()


route.get('/', (req, res) => {
    /*
    Find from CartItems
    Where
        userId = req.user.id
        and
        quantity > 0 //step 1
     */
})

route.post('/', (req, res) => {

    /*
    Data: {productId, quantity (signed)}
    Insert into CartItems
        userId = req.user.id
        productId = req.body.productId
        quantity += req.body.quantity
    // either do step1, or delete if quantity = 0
     */
})

exports = module.exports = route