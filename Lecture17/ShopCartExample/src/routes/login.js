const route = require('express').Router()
const passport = require('../passport')

route.get('/', passport.authenticate('oneauth'))

route.get('/callback', passport.authenticate('oneauth', {
    failureRedirect: '/',
    successRedirect: '/'
}))

exports = module.exports = route