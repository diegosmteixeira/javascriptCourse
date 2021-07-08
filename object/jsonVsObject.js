//JSON is data type. 
//(executables will not be converted to JSON notation)
const obj = { a: 1, b: 2, c: 3, sum() { return a + b + c } }
console.log(JSON.stringify(obj) + " : JSON format")

//console.log(JSON.parse("{'a': 1, 'b': 2, 'c':3 }")) INVALID FORMAT
//console.log(JSON.parse("{a: 1, b: 2, c:3 }")) INVALID FORMAT

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))