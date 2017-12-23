function fun1 () {
    console.log('you ran fun 1')
}

fun1()

function fun2 () {
    return 'from fun 2'
}

console.log(fun1())
console.log(fun2())

console.log(typeof fun2()) // string
console.log(typeof fun2) // function
let newfun = fun2
fun2 = 10

console.log(typeof fun2) //number

