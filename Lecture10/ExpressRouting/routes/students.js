const express = require('express')

const route = express.Router()

let students = [
    {name: 'Akash', age: 20},
    {name: 'Sneha', age: 21}
]

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

route.get('/:id', (req, res) => {
    if (isNaN(parseInt(req.params.id))) {
        res.send({
            error: 'Invalid id format'
        })
    }
    if (parseInt(req.params.id) >= students.length) {
        res.send({
            error: 'No such student'
        })
    }
    res.send(students[parseInt(req.params.id)])
})


exports = module.exports = route