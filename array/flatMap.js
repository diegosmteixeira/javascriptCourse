const school = [{
    name: 'class M1',
    students: [{
        name: 'George',
        score: 8.1
    }, {
        name: 'Ane',
        score: 9.3
    }]
}, {
    name: 'class M2',
    students: [{
        name: 'Rebeca',
        score: 8.9
    }, {
        name: 'Roger',
        score: 7.3
    }]
}]

const getScoreStudent = student => student.score
const getScoreClass = t => t.students.map(getScoreStudent)

const scores1 = school.map(getScoreClass)
console.log(scores1)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}