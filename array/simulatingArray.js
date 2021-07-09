//Playing with object notation

const almostArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(typeof almostArray)
console.log(almostArray)

//define a method that represents object almostArray like an array
Object.defineProperty(almostArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(almostArray[0])

const myArray = ['Rafael', 'Ana', 'Bia']
console.log(almostArray.toString(), myArray)

//Obviously an array has more than literal notation