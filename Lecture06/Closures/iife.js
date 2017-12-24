
let helloGreeter = (function createGreeter(greeting) {
    return function (name) {
        console.log(greeting + ' ' + name)
    }
})('Hello')

// let helloGreeter = createGreeter('Hello')
// helloGreeter('Shubham')
//
// let holaGreeter = createGreeter('Hola')
// holaGreeter('Neha')
//
// createGreeter('Hi')('Arnav')

helloGreeter('Arnav')