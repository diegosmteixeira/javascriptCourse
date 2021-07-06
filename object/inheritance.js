const ferrari = {
    model: 'F40',
    maxSpeed: 324
    //[[Prototype]] -> hidden attribute that point to Object.prototype
}

const volvo = {
    model: 'V40',
    maxSpeed: 200
    //[[Prototype]] -> hidden attribute that point to Object.prototype
}

console.log(ferrari.__proto__) //__proto__ is an access to Prototype Object (dad)
console.log(ferrari.__proto__ === Object.prototype) //Object.prototype is the highest prototype
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) //[[Prototype]] of Object.prototype points to null (prototype is the highest level)

function MyObject() {}
console.log(typeof Object, typeof MyObject)
console.log(Object.prototype, MyObject.prototype)