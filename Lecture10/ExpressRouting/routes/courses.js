const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.send("courses"))

exports = module.exports = route