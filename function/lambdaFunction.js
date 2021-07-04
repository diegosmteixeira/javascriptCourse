const sum = function(x, y){
    return x + y
}

const printResult = function (a, b, operation = sum){
    console.log(operation(a,b))
}

printResult(3, 4)
printResult(3, 4, sum)
printResult(3, 4, function(x, y){
    return x - y
})

printResult(3, 4, (x, y) => x * y)

const person = {
    speak: function() { 
        console.log('Hey')
    }
}

person.speak()

const person2 = {
    speak2() {
        console.log('Hello')
    }
}

person2.speak2()