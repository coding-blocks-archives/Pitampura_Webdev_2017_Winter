let socket = io()

$(function () {
    let msgbox = $('#msg')
    let sendBtn = $('#send')
    let infolist = $('#infolist')

    socket.on('info', (data) => {
        infolist.append(
            $(`<li>${data.timestamp} : ${data.message}</li>`)
        )
    })

    sendBtn.click(() => {
        let msg = msgbox.val()
        socket.emit('chat', {message: msg})
    })
})