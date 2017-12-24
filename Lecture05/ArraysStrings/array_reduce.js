let arr = [1,2,3,4,5,6,7,8]

function mult (accum, item, index, arr) {
    return accum * item
}

let x = arr.reduce(mult, 10)
console.log(x)