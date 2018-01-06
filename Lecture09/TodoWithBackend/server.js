const express = require('express')
const app = express()
let todos = []


app.use('/todos', express.static(__dirname + '/public'))

app.get('/showtodos', (req, res) => {
    res.send(todos)
})

app.get('/addtodo', (req, res) => {
    todos.push({
        task: req.query.task,
        done: false
    })
    res.redirect('/showtodos')
})

app.get('/dotodo', (req, res) => {
    todos[req.query.id].done = true
    res.redirect('/showtodos')
})

app.get('/deletetodo', (req, res) => {
    todos.splice(parseInt(req.query.id),1)
    res.redirect('/showtodos')
})


app.listen(2222, () => {
    console.log("Server started on http://localhost:2222")
})