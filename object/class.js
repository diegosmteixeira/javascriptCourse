class Launch {
    constructor(name = 'Generic', value = 0) {
        this.name = name
        this.value = value
    }
}

class Financial {
    constructor(month, year) {
        this.month = month
        this.year = year
        this.launches = []
    }

    addLaunches(...launches) {
        launches.forEach(l => this.launches.push(l))
    }

    summary() {
        let valueConsolidated = 0
        this.launches.forEach(l => {
            valueConsolidated += l.value
        })
        return valueConsolidated
    }
}

const salary = new Launch('Salary', 45000)
const lightBill = new Launch('Light', -220)

const accounts = new Financial(6, 2018)
accounts.addLaunches(salary, lightBill)
console.log(accounts.summary())