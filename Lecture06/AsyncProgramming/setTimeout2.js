let start = new Date().getTime()

let waitGen = function (id) {
    let wait = function () {
        let end = new Date().getTime()
        console.log(id + ': ' + (end - start))
    }
    return wait
}

setTimeout(waitGen(1), 3000)
setTimeout(waitGen(2), 3000)
setTimeout(waitGen(3), 3000)