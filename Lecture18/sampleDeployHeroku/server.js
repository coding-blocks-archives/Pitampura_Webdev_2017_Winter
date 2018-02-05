/**
 * Created by bhavyaagg on 04/02/18.
 */

const express = require('express');
const app = express();
const models = require('./db/models');
const config = require('./config');

app.get('/hello', (r, s) => s.send("Hello There"));

app.use(express.json())
app.use(express.urlencoded())

app.get('/items', (req, res) => {
  models.Items.findAll()
    .then((r) => res.send(r))
    .catch(err => res.send(err));
})

app.post('/items', (req, res) => {
  models.Items.create({
    name: req.body.name
  }).then((r) => res.redirect('/items'))
    .catch(err => res.send(err));
})

app.listen(config.PORT, () => {
  console.log("Listening on port " + config.PORT);
});