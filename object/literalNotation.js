//ECMAScript2015

const a = 1
const b = 2
const c = 3

const obj = { a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj, obj2)

const nameAttr = 'score'
const valueAttr = 7.87

const obj3 = {}
obj3[nameAttr] = valueAttr
console.log(obj3)

const obj4 = {[nameAttr]: valueAttr}
console.log(obj4)

const obj5 = {
    function1: function() {
        // ...
    },
    //2015:
    name(){
        // ...
    }
}

console.log(obj5)