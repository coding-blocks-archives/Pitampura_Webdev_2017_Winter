window.onload = function () {
    let btn = document.getElementById('btn')
    let show = document.getElementById('show')
    let incr = document.getElementById('incr')
    let count = document.getElementById('count')
    let stop = document.getElementById('stop')

    let taskId

    btn.onclick = function () {
        let start = (new Date()).getTime()
        taskId = setTimeout(function () {
            show.innerText = "HELLO"
        }, 5000)
    }

    stop.onclick = function () {
        clearTimeout(taskId)
    }

    incr.onclick = function () {
        count.innerText = parseInt(count.innerText) + 1
    }
}