const score = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Without Callback
let lowScore1 = []
for (let s in score) {
    if (score[s] < 7) {
        lowScore1.push(score[s])
    }
}

console.log(lowScore1)

//CallBack
const lowScore2 = score.filter(function (s){
    return s < 7
})
console.log (lowScore2)

//Callback arrowFunction
const lowScore3 = score.filter(score => score < 7)

console.log(lowScore3)