const prod = {
    name: '...',
    price: 45
}

const prod2 = {
    name: '...',
    price: 1234
}

//Simple Factory
function createPerson() {
    return {
        name: 'Ana',
        lastname: 'Silva'
    }
}

console.log(createPerson()) //'manufacture' a object