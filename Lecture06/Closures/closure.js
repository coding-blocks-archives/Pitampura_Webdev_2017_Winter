function createCounter () {
    let x = 10
    let count = function () {
        x++
        return x
    }
    count.x = 20
    return count
}

let c1 = createCounter()
let c2 = createCounter()

console.log(c1())
console.log(c1())
console.log(c1())
console.log(c2())