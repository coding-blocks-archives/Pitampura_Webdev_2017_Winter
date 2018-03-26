const express = require('express');
const path = require('path')
const multer = require('multer')
const fs = require('fs')
const upload = multer({dest: 'uploads/'})

const app = express();

app.post('/up', upload.single('photo'), (req, res) => {
  fs.readFile(req.file.path, (err, data) => {
    fs.writeFile('public_static/images/'+req.file.originalname, data, (err) => {
      fs.unlink(req.file.path, () => {})
    })
  })
  res.send(`File is <a href="/images/${req.file.originalname}">here</a>`)
})

app.use('/', express.static(path.join(__dirname, 'public_static')))


app.listen(4545, function () {
    console.log("Server started on http://localhost:4545");
});