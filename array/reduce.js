const students = [
    { name: 'John', score: 7.3, scholar: false },
    { name: 'Mary', score: 9.2, scholar: true },
    { name: 'Peter', score: 9.8, scholar: false },
    { name: 'Ann', score: 8.7, scholar: true }
]

console.log(students.map(s => s.score))
const result = students.map(s => s.score).reduce(function(accumulator, current) {
    console.log(accumulator, current)
    return accumulator + current
})

console.log(result)