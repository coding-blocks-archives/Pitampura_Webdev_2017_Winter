let a = {p: 10, q: 'hello'}

let b = Object.create(a)
b.x = 22
b.y = 'abc'

let c = Object.create(b)