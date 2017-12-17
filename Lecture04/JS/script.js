// console.log('Hello')
// console.log(document.body)
// console.log(document.getElementById('list'))

let list = document.getElementById('list')
let btnMakeList = document.getElementById('makelist')
let countBox = document.getElementById('count')

btnMakeList.onclick = function () {
    let startTime = (new Date()).getTime();

    let count = parseInt(countBox.value)

    for (let i = 0; i < count; i++) {
        list.innerHTML += "<li>" + i + "</li>"
    }

    let endTime = (new Date()).getTime()
    console.log(endTime - startTime)
}
