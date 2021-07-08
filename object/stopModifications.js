// Object.preventExtensions
const product = Object.preventExtensions({
    name: 'Whatever', price: 1.99, tag:'promotion'
})
console.log('Extensible:', Object.isExtensible(product))

product.name = 'eraser' //is possible change attributes
product.description = 'White eraser' //isn't possible add other attributes
delete product.tag //is possible remove attributes

console.log(product)


//Object.seal
const person = { name: 'Julie', age: 35}
Object.seal(person)

console.log('Sealed:', Object.isSealed(person))

person.lastname = 'Reagan' //You can't change attributes
delete person.name //You can't delete attributes
person.age = 29 //Is possible change attributes

console.log(person)

//Object.freeze = sealed + constat values

