//Custom Filter2
Array.prototype.filter2 = function(callback){
    newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const products = [
    { name: 'Notebook', price: 2499, fragile: true },
    { name: 'iPad Pro', price: 4199, fragile: true },
    { name: 'Glass cup', price: 12.49, fragile: true },
    { name: 'Plastic cup', price: 18.99, fragilee: false }
]

console.log(products.filter2(function(p) {
    return p.price > 2500 && p.fragile
}))