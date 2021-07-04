let compareWithThis = function(param) {
    console.log(this === param)
}

console.log('Global === this?')
//global === Global Object
compareWithThis(global)
console.log('---')
const obj = {}
compareWithThis = compareWithThis.bind(obj) //bind change 'this' orientation
console.log('Global === this?')
compareWithThis(global)
console.log('obj === this?')
compareWithThis(obj)

//Arrow Function => this point to Nodejs module
console.log('---')
let compareWithThisArrow = param => console.log(this === param)
console.log('this in arrow function is global?')
compareWithThisArrow(global)
console.log('this in arrow function is module NodeJs?')
compareWithThisArrow(module.exports)

//this not change in arrow function
compareWithThisArrow = compareWithThisArrow.bind(obj)
console.log("is .bind capable of change 'this' context?")
compareWithThisArrow(obj)
console.log('this still module NodeJs?')
compareWithThisArrow(module.exports)