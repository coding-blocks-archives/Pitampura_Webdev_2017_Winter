const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient


const DB_URL = "mongodb://localhost:27017"

MongoClient.connect(DB_URL)
    .then((client) => {

        const db = client.db('mydb')
        const todos = db.collection('todos')

        todos.insertMany([
            {task: 'Learn Mongodb', priority: 1, done: true},
            {task: 'Learn JS', priority: 2, done: false},
            {task: 'Live your life', priority: 5, done: false}
        ]).then((results) => {
            console.log(results)
        }).catch((err) => {
            console.error(err)
        })

    })
    .catch((err) => {
        console.log("Could not connect")
        console.error(err)
    })
