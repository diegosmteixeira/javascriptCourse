const dad = { name: 'Peter', hairColor: 'black' }

const daughter = Object.create(dad) //Create daughter with dad as prototype
daughter.name = 'Ane'
console.log(daughter.hairColor)

const daughter2 = Object.create(dad, {
    name: { value: 'Bia', writable: false, enumerable: true }
})

console.log(daughter2.name)
daughter.name = 'Caroline'
console.log(`${daughter2.name} hairColor: ${daughter2.hairColor}`)

console.log(Object.keys(daughter))
console.log(Object.keys(daughter2))

for(let key in daughter2) {
    daughter2.hasOwnProperty(key) ?
        console.log(key) : console.log(`By inheritance: ${key}`) //hasOwnProperty = name; By inheritance = hairColor
}