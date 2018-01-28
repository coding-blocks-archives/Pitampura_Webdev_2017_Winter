const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/products', require('./routes/products'))
app.use('/categories', require('./routes/categories'))

app.listen(2626, () =>
    console.log("Server started on http://localhost:2626"))