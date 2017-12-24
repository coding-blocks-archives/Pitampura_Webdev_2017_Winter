let arr = [1,2,3,4,5,6,7,8]

function diffOf10 (item, index, array) {
    return 10 - item
}

function reverse (item, index, array) {
    return array[array.length - index - 1]
}


let arr2 = arr.map(reverse)
let sqrtArr = arr.map(Math.sqrt)