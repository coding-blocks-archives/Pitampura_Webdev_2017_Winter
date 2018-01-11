const mysql = require('mysql2')

let task = process.argv[2]

const connection = mysql.createConnection(require('./mysql'))

connection.query(
    `insert into todos (task, done) 
    values (?, false)`,
    [task],
    function (err, result) {
        console.log(result)
    }
)
