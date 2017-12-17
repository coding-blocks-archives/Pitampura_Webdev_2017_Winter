// console.log('Hello')
// console.log(document.body)
// console.log(document.getElementById('list'))

let list = document.getElementById('list')
let btnMakeList = document.getElementById('makelist')
let countBox = document.getElementById('count')

btnMakeList.onclick = function () {
    let startTime = (new Date()).getTime();

    let count = parseInt(countBox.value)
    let listContent = "", output = "";
    for (let i = 0; i < count; i++) {
        output = ""
        if (i % 3 === 0) output = "fizz"
        if (i % 5 === 0) output += "buzz"
        if (output === "") output = i

        listContent += "<li>" + output + "</li>"
    }

    list.innerHTML = listContent

    let endTime = (new Date()).getTime()
    console.log(endTime - startTime)
}
