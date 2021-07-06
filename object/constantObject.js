// person => 123 -> {...}
const person = { name: 'John'}
person.name = 'Peter'
console.log(person)

// person <-- 456 --> {...} 
//person = { name : 'Ane'}

//this code return a error because person is a constant.
//so, person just point to same memory address

Object.freeze(person)

person.name = 'Mary'
person.end = 'Street ABC'
delete person.name
console.log(person.name)
console.log(person)

//variable and value(object) don't change:
const personConst = Object.freeze({name : "Aldo"})
console.log(personConst)