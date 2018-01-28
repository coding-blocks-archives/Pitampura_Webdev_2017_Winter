const route = require('express').Router()
const ctrl = require('../controllers/categories')

route.get('/', (req, res) => {
    ctrl.getAllCategories()
        .then((categories) =>
            // res.status(200).json(categories)
            res.status(200).render('categories', {
                categories,
                userAuthenticated: !!req.user
            })
        )
        .catch((err) =>
            res.status(500).json({message: err.message})
        )
})

route.post('/', (req, res) => {
    ctrl.addCategory(req.body)
        .then((addedCategory) =>
            // res.status(201).json(addedCategory)
            res.redirect('/categories')
        )
        .catch((err) =>
            res.status(500).json({message: err.message})
        )
})


exports = module.exports = route