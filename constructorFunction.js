function Car(maxSpeed = 200, delta = 5) {
    //private attribute
    let currentSpeed = 0

    //public method
    this.accelerate = function () {
        if (currentSpeed + delta <= maxSpeed)
        {
            currentSpeed += delta
        } else {
            currentSpeed = maxSpeed
        }
    }

    //public method
    this.getCurrentSpeed = function () {
        return currentSpeed
    }
}

const vectra = new Car
vectra.accelerate()
console.log(vectra.getCurrentSpeed())

const ferrari = new Car(350, 20)
ferrari.accelerate()
ferrari.accelerate()
ferrari.accelerate()
console.log(ferrari.getCurrentSpeed())

console.log(typeof Car)
console.log(typeof ferrari)