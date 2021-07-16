Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i=0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this)) //this[i] = current element; i = index; this = current array
    }
    return newArray
}

const shop = [
    '{ "name":"Pen", "price": 3.45 }',
    '{ "name":"Notebook", "price": 13.90 }',
    '{ "name":"Lapis", "price": 41.22 }',
    '{ "name":"Eraser", "price": 7.50 }'
]

//Array with prices
const toObject = json => JSON.parse(json)
const justPrice = product => product.price

const result = shop.map2(toObject).map2(justPrice)
console.log(result)

//map === map2 (custom)