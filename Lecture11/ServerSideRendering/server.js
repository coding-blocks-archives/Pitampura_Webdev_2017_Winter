const express = require('express')
const app = express()

app.set('view engine', 'hbs')

let todos = [
    {task: 'abc'},
    {task: 'def'}
]

app.get('/', (req, res) => {
    res.render('todos', {todos})
})

app.listen(2678, () => {
    console.log("Server started on http://localhost:2678")
})


