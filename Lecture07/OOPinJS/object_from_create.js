function Student () {
  return Object.create(Person.prototype, {
    a: {
      writable: false,
      value: 10,
    },
    b: {
      value: 20
    },
    c: {
      get: function () {
        return this.a + this.b
      },
      set: function (val) {

      }
    }
  })
}