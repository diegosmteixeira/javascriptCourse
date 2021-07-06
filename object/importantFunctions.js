const person = {
    name: 'Terence',
    age: 2,
    weigth: 13
}

//Show all keys of an object
console.log(Object.keys(person))

//Show all values
console.log(Object.values(person))

//Entries of an object
console.log(Object.entries(person))

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`) //Template String
})

Object.entries(person).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`) //Template String
})

Object.defineProperty(person, 'birthDate', {
    enumerable: true, //accept object.keys etc
    writable: false, //don't accept changes on attributes
    value: '01/01/2019'
})

person.birthDate = '01/01/2017'
console.log(person.birthDate)  //stay the same value
console.log(Object.keys(person)) //enumerable: true

//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a:4 }
const obj = Object.assign(dest, o1, o2)

//Object.freeze
Object.freeze(obj)
obj.c = 1234
console.log(obj)