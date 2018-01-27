const MongoClient = require('mongodb').MongoClient

const DB_URL = "mongodb://localhost:27017"
const DB_NAME = "mydb"

// MongoClient.connect(DB_URL)
//     .then((client) => {
//         const db = client.db(DB_NAME)
//         const todos = db.collection('todos')
//
//         todos.find({
//             $or: [
//                 {
//                     priority: {
//                         $gt: 1
//                     }
//                 },
//                 { done: false}
//             ]
//         }).toArray()
//             .then((items) => {
//                 console.log(items)
//             })
//     })
//     .catch((err) => {throw err})

MongoClient.connect(DB_URL)
    .then((client) => {
        const db = client.db(DB_NAME)
        const todos = db.collection('todos')

        todos.find({
            priority: { $exists: true }
        }).sort({priority: 1}).toArray()
            .then((items) => {
                console.log(items)
            })
    })
    .catch((err) => {throw err})