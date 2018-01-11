const mysql = require('mysql2')

const connection = mysql.createConnection(require('./mysql'))

connection.query(
    `select * from todos`,
    function (err, result, fields) {
        if (err) throw err;


        console.log(result)
        // console.log(fields)

    }

)