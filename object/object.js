//collection key/value

const product = new Object
product.name = 'Chair'
product['product brand'] = 'Generic'
product.price = 220

console.log(product)
delete product.price
delete product['product brand']
console.log(product)

const car = {
    model: 'A4',
    value: 89000,
    owner: {
        name: 'Raul',
        age: 56,
        address: {
            street: 'ABC',
            number: 123
        }
    },
    drivers: [{
        name: 'Jay',
        age: 19
    }, {
        name: 'Ane',
        age: 42
    }],
    insuranceValue: function() {
        // ..
    }
}

car.owner.address.number = 1000
car['owner']['address']['street'] = 'Red Avenue'
console.log(car)


delete car.drivers
delete car.owner.address
delete car.insuranceValue
console.log(car)
console.log(car.drivers)
//console.log(car.drivers.length) -- error
