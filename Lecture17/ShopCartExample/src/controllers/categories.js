const {Category} = require('../db/models')


exports = module.exports = {
    getAllCategories: () => Category.findAll({}),
    addCategory: async (reqBody) => {

        //Validate data
        if (!reqBody.name) {
            throw new Error("Cannot create category without name")
        }

        return Category.create({
            name: reqBody.name,
            tax_perc: reqBody.tax_perc
        })

    }
}