//Prototype Chain

Object.prototype.attr00 = '0' //not recommended to do that
const granPa = { attr1: 'A'}
const dad = {__proto__: granPa, attr2: 'B', attr3: '3'}
const son = {__proto__: dad, attr3: 'C'}

console.log(son.attr1) //'A'
console.log(son.attr0) //undefined
console.log(son.attr00) //'0' - Object.prototype
console.log(son.attr3) //'C'

const car = {
    maxSpeed: 200,
    currentSpeed: 0,
    accelerate(delta) {
        if (this.currentSpeed + delta <= this.maxSpeed) {
            this.currentSpeed += delta
        } else {
            this.currentSpeed = this.maxSpeed

        }
    },
    status() {
        return `${this.currentSpeed}Km/h of ${this.maxSpeed}Km/h`
    }
}

const ferrari = {
    model: 'F40',
    maxSpeed: 324 //Shadowing Car MaxSpeed
}

const volvo = {
    model: 'V40',
    status() {
        return `${this.model}: ${super.status()}` //Call Prototype method car.status() and override
    }
}

Object.setPrototypeOf(ferrari, car) //ferrari have car as Prototype
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

volvo.accelerate(100)
console.log(volvo.status())

ferrari.accelerate(300)
console.log(ferrari.status())