const students = [
    { name: 'John', score: 7.3, scholar: false },
    { name: 'Mary', score: 9.2, scholar: true },
    { name: 'Peter', score: 9.8, scholar: false },
    { name: 'Ann', score: 8.7, scholar: true }
]

//All scholar?
const allScholar = (accumulator, scholar) => accumulator && scholar
console.log(students.map(s => s.scholar).reduce(allScholar))

//Some scholar?
const someScholar = (accumulator, scholar) => accumulator || scholar
console.log(students.map(s => s.scholar).reduce(someScholar))