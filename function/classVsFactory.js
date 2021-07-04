//Class
class Person {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`My name is ${this.name}`)
    }

}

//Constructor Function
function PersonConstructor(name) {
    this.name = name

    this.speak = function() {
        console.log(`My name is ${this.name}`)
    }
}

const p1 = new Person('John')
p1.speak()

const p2 = new PersonConstructor('William')
p2.speak()

//Factory
const createPerson = name => {
    return {
        speak: () => console.log(`My name is ${name}`)
    }
}

const p3 = createPerson('Paul')
p3.speak()