//Closure - In JavaScript, every time a closure is created with the creation of a function. 

/*
 * The closure has three scope chains listed as follows: 
 * Access to its own scope. 
 * Access to the variables of the outer function.
 * Access to the global variables.
*/

const x = 'Global'

function outside() {
    const x = 'Local'
    function inside() {
        return x
    }
    return inside //Closure: x = 'Local'
}

const myFunction = outside()
console.log(myFunction())