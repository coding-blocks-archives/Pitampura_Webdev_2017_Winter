const express = require('express')

const app = express()

function hello(req, res, next) {
    (parseInt(Math.random() * 10) % 2) == 0
    ? res.send("Hello")
    : next()

    // res.send("Hello")
    // next()

}

function world (req, res, next) {
    // res.send("World")
    next()
}

app.get('/', hello, world)

app.listen(3333, () => {
    console.log("Started on http://localhost:3333")
})