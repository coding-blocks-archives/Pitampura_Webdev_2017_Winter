const express = require('express')
const app = express()

const routes = {
    students: require('./routes/students'),
    courses: require('./routes/courses')
}

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/students', routes.students)
app.use('/courses', routes.courses)


app.listen(3434, () => {
    console.log("Server started on http://localhost:3434")
})