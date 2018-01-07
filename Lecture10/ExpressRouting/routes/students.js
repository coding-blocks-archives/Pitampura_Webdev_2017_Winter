const express = require('express')

const route = express.Router()

let students = [
    {name: 'Akash', age: 20},
    {name: 'Sneha', age: 21}
]

function validateId(req, res, next) {
    if (isNaN(parseInt(req.params.id))) {
        return res.send({
            error: 'Invalid id'
        })
    }
    req.params.id = parseInt(req.params.id)
    next()
}

function idExists(req, res, next) {
    if (!students[req.params.id]) {
        return res.send({
            error: 'No such student'
        })
    }
    next()
}

route.get('/', (req, res) => res.send(students))

route.post('/', (req, res) => {
    students.push({
        name: req.body.name,
        age: req.body.age
    })
    res.send({
        success: true,
        id: students.length - 1
    })
})

route.use('/:id', validateId)

route.get('/:id', idExists, (req, res) => {

    res.send(students[req.params.id])
})

route.put('/:id', (req, res) => {
    students[req.params.id] = {
        name: req.body.name,
        age: req.body.age
    }
    res.send({
        success: true
    })
})

route.patch('/:id', idExists, (req, res) => {
    req.body.name
        ? students[req.params.id].name = req.body.name
        : null;
    req.body.age
        ? students[req.params.id].name = req.body.age
        : null;
    res.send({
        success: true
    })

})

route.delete('/:id', idExists, (req, res) => {
    delete students[req.params.id]
    res.send({
        success: true
    })
})


exports = module.exports = route