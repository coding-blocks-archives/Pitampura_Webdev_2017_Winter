const express = require('express')
const app = express()

app.set('view engine', 'hbs')
app.set('views', 'templates')

let todos = [
    {task: 'abc'},
    {task: 'def'}
]

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(__dirname + '/public'))


app.get('/', (req, res) => {
    res.render('todos', {todos})
})

app.post('/', (req, res) =>{
    todos.push({
        task: req.body.task
    })
    res.redirect('/')
})

app.listen(2678, () => {
    console.log("Server started on http://localhost:2678")
})


