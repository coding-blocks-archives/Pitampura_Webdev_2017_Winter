const express = require('express')
const flash = require('connect-flash')
const session = require('express-session')

const app = express()

app.set("view engine", "hbs")

app.use(session({
    secret: 'very very secret',
    resave: false,
    saveUninitialized: false
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(flash())

app.get("/math", (req, res) => {
    res.render('mathques', {answer: req.flash('answer')})
})

app.post("/math", (req, res) => {
    if (parseInt(req.body.answer) === 4) {
        req.flash('answer', 'correct')
    } else {
        req.flash('answer', 'wrong')
    }
    res.redirect('/math')

})

app.listen(2323, () => {
    console.log("Server started on http://localhost:2323")
})