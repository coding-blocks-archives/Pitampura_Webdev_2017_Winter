let nArr = [1,2,3,4,5,6,7]
let sArr = ['hello', 'wassup']

console.log(sArr.join('-'))
sArr.splice(4,2, 9,8,7)


let arr1 = [5,1,8,3,9,11,24,4,3]
let arr2 = arr1.join('-').split('-')

function universalCompare(a, b) {
    return a > b
}


arr1.sort((a,b) => a > b)
arr2.sort((a,b) => a > b)
console.log(arr1)
console.log(arr2)
