// let id
// setTimeout(function () {
//     clearInterval(id)
// }, 1000)
//
// id = setInterval(function () {
//     console.log('a')
// }, 10)

// let id = (setTimeout(function () {
//     clearInterval(id)
// }, 1000), setInterval(function () {
//     console.log('a')
// }, 10))

// setTimeout((id) => clearInterval(id), 1000, setInterval(function () {
//     console.log('a')
// }, 10))

((x) => setTimeout(() => clearInterval(x), 1000))(setInterval(() => console.log('a'), 10))

// (function (x) {
//     setTimeout(function () {
//         clearInterval(x)
//     }, 1000)
// })(setInterval(function () {
//     console.log('a')
// }, 10))
