const express = require('express')
const http = require('http')
const socketio = require('socket.io')


const app = express()

const server = http.createServer(app)
const io = socketio(server)

let socketIdName = {}

io.on('connection', function (socket) {
    console.log('Socket connected ' + socket.id)

    socket.on('login', (data) => {
        socketIdName[socket.id] = data.username
        socket.join(data.username)

        socket.emit('logged_in', {
            username: data.username,
            success: true
        })
    })

    socket.on('chat', (data) => {
        if (socketIdName[socket.id]) {

            if (data.message.charAt(0) === '@') {

                let recipient = data.message.split(' ')[0].substring(1)

                io.to(recipient).emit('chat', {
                    private: true,
                    sender: socketIdName[socket.id],
                    message: data.message,
                    timestamp: new Date()
                })

            } else {
                socket.broadcast.emit('chat', {
                    sender: socketIdName[socket.id],
                    message: data.message,
                    timestamp: new Date()
                })
            }


        }
    })


})



app.use('/', express.static(__dirname + '/public'))

server.listen(2345, () => {
    console.log("Server started on http://localhost:2345")
})