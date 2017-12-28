function setA (val) {
  this.a = val
}

let setB = (val) => {this.b = val}

let x = {}
x.fun = setA
x.wow = setB
x.wtf = function (a) { setB(a) } // call is not possible in arrow fn
x.omg = function (b) { setA.call(this, b) }

let obj = {
  a: 10,
  b: function () {
    return this.a + 1
  }
}
