const {Category, Product} = require('../db/models')
const {isArray} = require('util')


exports = module.exports = {
    getAllProducts: (reqQuery) => {
        if (!isArray(reqQuery.sortBy)) {
            reqQuery.sortBy = [reqQuery.sortBy]
        }
        const orderClause = reqQuery.sortBy.map((item) => {
            if (item === 'priceHigh') return ['price', 'DESC']
            if (item === 'priceLow') return ['price', 'ASC']
            if (item === 'latest') return ['createdAt', 'DESC']
            if (item === 'oldest') return ['createdAt', 'ASC']
        })

        return Product.findAll({
            order: orderClause,
            include: [{
                model: Category,
                attributes: ['tax_perc', 'name']
            }]
        })
    },
    addProduct: async (reqBody) => {

        //Validate data
        if (!reqBody.name) {
            throw new Error("Cannot create product without name")
        }
        // Add more such validations here

        return Product.create({
            name: reqBody.name,
            vendor: reqBody.vendor,
            price: reqBody.price,
            categoryId: reqBody.category
        })


    }
}