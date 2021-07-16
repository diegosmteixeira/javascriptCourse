const products = [
    { name: 'Notebook', price: 2499, fragile: true },
    { name: 'iPad Pro', price: 4199, fragile: true },
    { name: 'Glass cup', price: 12.49, fragile: true },
    { name: 'Plastic cup', price: 18.99, fragilee: false }
]

console.log(products.filter(function(p) {
    return false //empty array
}))

console.log(products.filter(function(p) {
    return true //return all elements
}))

console.log(products.filter(function(p) {
    return p.price > 2500 //return only elements with price > 2500
}))

console.log(products.filter(function(p) {
    return p.price > 500 && p.fragile
}))

//another way
const expensive = product => product.price >= 500
const fragile = product => product.fragile

console.log(products.filter(expensive).filter(fragile))