
let id = setInterval(function () {
    console.log('a')
}, 10)

setTimeout(function () {
    clearInterval(id)
}, 1000)
