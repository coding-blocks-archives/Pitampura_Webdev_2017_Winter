const express = require('express')
const session = require('express-session')
const app = express()
const passport = require('./passport')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'some very secret thing',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'hbs')

app.use('/user', require('./routes/user'))
app.use('/pages', require('./routes/pages'))
app.get('/', (r,s) => s.render('index'))

app.listen(3232, () => console.log("http://localhost:3232"))