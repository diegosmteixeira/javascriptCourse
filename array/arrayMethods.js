const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilots.pop() //remove last element
console.log(pilots)

pilots.push('Verstappen')
console.log(pilots)

pilots.shift() //remove the first element
console.log(pilots)

pilots.unshift('Hamilton') //Add element to pilots[0] (first position)
console.log(pilots)

//adding with splice
pilots.splice(2, 0, 'Bottas', 'Massa')
console.log(pilots)

//removing with splice
pilots.splice(3, 1) //remove 'Massa'
console.log(pilots)

//new Array with slice
const somePilots = pilots.slice(2) //new array with pilots[2], pilots[3], pilots[4]
console.log(somePilots)

const somePilots2 = pilots.slice(1, 4) //new array with pilots[1], pilots[2], pilots[3]
console.log(somePilots2)