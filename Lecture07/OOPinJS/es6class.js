class Person {
  constructor(name, age) {
    this.firstName = name.split(" ")[0]
    this.lastName = name.split(" ")[1]
    this.age = age
  }
  get name() {
    return this.firstName + " " + this.lastName
  }
  set name(val) {
    this.firstName = val.split(" ")[0]
    this.lastName = val.split(" ")[1]
  }
  static hello () {
    return "HELLO"
  }
}

class Student extends Person {
  constructor(name, age, school) {
    if (Person.prototype.isPrototypeOf(name)) {
      school = age
      age = name.age
      name = name.name
    }
    super(name, age)
    this.school = school
  }
}

let p = new Person("John Doe", 30)
let s = new Student('Jane Doe', 22, 'DAV')
// let ps = new Student(p, 'DPS')
