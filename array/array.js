//Array in Javascript is an object
console.log(typeof Array, typeof new Array, typeof [])

let approved = new Array('John', 'Toya', 'Mitsumi')
console.log(approved)

approved = ['Ryan', 'Tony', 'Diego']
console.log(approved[0])
console.log(approved[1])
console.log(approved[2])
console.log(approved[3])

approved[3] = 'Paul'
approved.push('Abia') //most used
console.log(approved.length)

approved[9] = 'Rafael'
console.log(approved.legth)
console.log(approved[8] === undefined)

console.log(approved) //[ 'Ryan', 'Tony', 'Diego', 'Paul', 'Abia', <4 empty items>, 'Rafael' ]
approved.sort()
console.log(approved)

delete approved[1] //return approved[1] = undefined
console.log(approved[1])
console.log(approved[2])

//splice(pos, delete, add)
approved = ['Bia', 'Carlos', 'Ana']
approved.splice(1, 1) //select approved[1], delete just one element
console.log(approved)

approved.splice(1, 2, 'Element1', 'Element2') //approved[1], delete two elements, then add 'Element1, 'Element2'
console.log(approved)

approved.splice(2, 1) //[ 'Bia', 'Element1' ]
console.log(approved)

approved.splice(1, 0, 'Add', 'Add2') //[ 'Bia', 'Add', 'Add2', 'Element1' ]
console.log(approved)