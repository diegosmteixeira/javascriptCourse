//literal notation
const obj = {}
console.log(obj)


//Object in JS
console.log(typeof Object)
console.log(typeof new Object)
const obj2 = new Object
console.log(obj2)

//Constructor Function
function Product(name, price, discount) {
    this.name = name //this.name is visible to outside the function
    this.getPrice = () => {
        return price * (1 - discount)
        //price and discount is visible only inside the function
    }
}

const p1 = new Product('Pen', 7.99, 0.15)
const p2 = new Product('Notebook', 2998.99, 0.25)

console.log(p1.getPrice(), p2.getPrice())

//Factory Function - Project Pattern
function createEmployee(name, baseSalary, lack) {
    return {
        name,
        baseSalary,
        lack,
        getSalary() {
            return (baseSalary / 30) * (30 - lack)
        }
    }
}

const f1 = createEmployee('John', 7980, 4)
const f2 = createEmployee('Mary', 11400, 1)
console.log(f1.getSalary(), f2.getSalary())

// Object.create
const f = Object.create(null)
f.name = 'Ane'
console.log(f)

//JSON.Parse
const fromJSON = JSON.parse('{"info": "Im a JSON"}')
console.log(fromJSON.info)


/* remember: json is string*/