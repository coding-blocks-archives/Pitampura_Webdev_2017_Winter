const express = require('express')

const app = express()

function sanitize (req, res, next) {
    req.query.a = parseInt(req.query.a)
    req.query.b = parseInt(req.query.b)
    next()
}
function add (req, res, next) {
    res.send(req.query.a + req.query.b + '')
}
function subtract (req, res, next) {
    res.send((req.query.a - req.query.b) + '')
}

app.use('/int', sanitize)

app.get('/string/add', add)
app.get('/string/subtract', subtract)

app.get('/int/add', subtract)
app.get('/int/add', add)

app.get('/int/subtract', subtract)

app.listen(3232)