const express = require('express')
const http = require('http')
const socketio = require('socket.io')


const app = express()

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', function (socket) {
    console.log('Socket connected ' + socket.id)
    socket.on('chat', (data) => {
        console.log('Chat received = ' + data.message)

        socket.emit('info', {
            message: 'Chat received',
            timestamp: new Date().getTime()
        })
    })
})



app.use('/', express.static(__dirname + '/public'))

server.listen(2345, () => {
    console.log("Server started on http://localhost:2345")
})