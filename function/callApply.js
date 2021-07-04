function getPrice(tax = 0, coin = 'R$') {
    return `${coin} ${this.price * (1 - this.discount) * (1 + tax)}`
}

const product = {
    name: 'Notebook',
    price: 4589,
    discount: 0.15,
    getPrice
}

global.price = 20
global.discount = 0.1

//direct executing
console.log(getPrice()) //getPrice declared on global context (don't access discount and price of product)

//running through an object
console.log(product.getPrice()) //access local attributes of product

//using Call
const car = { price: 4999, discount: 0.20}

console.log(getPrice.call(car))
console.log(getPrice.call(car, 0.17, '$')) //context + parameters

//using Apply
console.log(getPrice.apply(car))
console.log(getPrice.apply(car, [0.17, '$'])) //context + array with parameters
console.log(getPrice.apply(global, [0.17, '$']))