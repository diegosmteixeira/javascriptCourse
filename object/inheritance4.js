function MyObject() {}
console.log(MyObject.prototype)

const obj = new MyObject
const obj2 = new MyObject
console.log(obj.__proto__ === obj2.__proto__)
console.log(MyObject.prototype === obj.__proto__)

MyObject.prototype.name = 'Anonymous'
MyObject.prototype.speak = function() {
    console.log(`Good morning! My name is ${this.name}!`)
}

obj.speak()

obj2.name = 'Kyle'
obj2.speak()

const obj3 = {}
obj3.__proto__ = MyObject.prototype
obj3.name = 'Obj3'
obj3.speak()

//Summary
console.log((new MyObject).__proto__ === MyObject.prototype)
console.log(MyObject.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) //nul != undefined

/*
const MyLittleObject = function MyObject(){}

function MyObject.prototype point to 
                            MyLittleObject

MyLittleObject.__proto__ === [[Prototype]] and point to
                            Object.Prototype

finally:
function MyObject.__proto__ === [[Prototype]] and point to
                            Function.prototype

Function.__proto__ === [[Prototype]] and point to
                            Object.prototype
*/