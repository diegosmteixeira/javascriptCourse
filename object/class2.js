class Grandpa {
    constructor(lastname) {
        this.lastname = lastname
    }
}

class Dad extends Grandpa {
    constructor(lastname, profession = 'Teacher') {
        super(lastname)
        this.profession = profession
    }
}

class Son extends Dad {
    constructor() {
        super('Slater')
    }
}

const son = new Son
console.log(son)