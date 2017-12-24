let arr = [1,2,3,4,5,6,7,8]

function removeOdds(item, index, array) {
    return item % 2 === 0
}
let arr2 = arr.filter(removeOdds)