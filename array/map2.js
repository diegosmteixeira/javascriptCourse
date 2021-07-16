const shop = [
    '{ "name":"Pen", "price": 3.45 }',
    '{ "name":"Notebook", "price": 13.90 }',
    '{ "name":"Lapis", "price": 41.22 }',
    '{ "name":"Eraser", "price": 7.50 }'
]

//Array with prices (first attempt)
let cut = e => e.substring(e.indexOf("price"), e.indexOf("}"))
let number = c => c.substring(c.lastIndexOf(":") + 1)

let price = shop.map(cut).map(number).map(e => parseFloat(e))
console.log(price)

//Array with prices 2 (Professor)
const toObject = json => JSON.parse(json)
const justPrice = product => product.price

const result = shop.map(toObject).map(justPrice)
console.log(result)
