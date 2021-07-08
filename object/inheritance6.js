function Lesson(name, videoID) {
    this.name = name,
    this.videoID = videoID
}

const lesson1 = new Lesson('Welcome', 123)
const lesson2 = new Lesson('See you soon', 456)
console.log(lesson1, lesson2)

//Simulating 'new' operator
function news(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const lesson3 = news(Lesson, 'Welcome', 123)
const lesson4 = news(Lesson, 'See you soon', 456)
console.log(lesson3, lesson4)