const person = {
    say: 'Good Morning',
    speak(){
        console.log(this.say)
    }
}

person.speak()

const speak = person.speak
speak() //conflict POO vs function

//this == person (BIND)
const speakPerson = person.speak.bind(person)
speakPerson()