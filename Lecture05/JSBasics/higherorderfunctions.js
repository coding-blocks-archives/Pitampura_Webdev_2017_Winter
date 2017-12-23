function dogreet(greeter, name) {
    console.log(greeter() + ' ' + name)
}

function createGreeter (greeting) {

    function greeter () {
        return greeting
    }

    return greeter
}
function greet() {
    return 'Hello'
}

dogreet(createGreeter('Hello'), 'Arnav')