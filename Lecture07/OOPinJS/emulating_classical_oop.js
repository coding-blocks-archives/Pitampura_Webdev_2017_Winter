let houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]

function Person(name, age, houseNo) {
    //name, age are private
    //private
    let house = houses[houseNo]

    //public
    this.age = age
    this.getFullName = () => name
    this.getFirstName = () => name.split(" ")[0]
    this.getLastName = () => name.split(" ")[1]
    this.setFirstName = (val) => {
        name = name.split(" ")
        name.splice(0,1,val)
        name = name.join(" ")
    }
    this.getHouse = () => house
}
Person.hello = function () {

}
// like static in classical OOP
Person.prototype.school = "Hogwarts"
Person.prototype.isAdult = function () {
    return this.age > 18
}

let p = new Person("Harry Potter", 15, 0)
let q = new Person("Ron Weasley", 20, 0)
