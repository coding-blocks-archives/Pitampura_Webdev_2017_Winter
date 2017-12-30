const express = require('express')

const app = express()

let todos = []

app.get('/', (req, res) => {
    res.send('Hello')
})
app.get('/greet', (req, res) => {
    res.send(`<h1>Hello ${req.query.name}!</h1>`)
})

app.get('/showtodos', (req, res) => {
    res.send(todos)
})
app.get('/addtodo', (req, res) => {
    todos.push(req.query.task)
    res.redirect('/showtodos')
})

app.listen(2222)