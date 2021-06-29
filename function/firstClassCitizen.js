// First-Class Object (Citizen)
// Higher-order Function

function fun1() { }

//Variable
const fun2 = function () {}

//Array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Attribute
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

//Parameter
function run(fun) {
    fun()
}

run(function () { console.log ('Executando...')})

//Function inside another function
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)