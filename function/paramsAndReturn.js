function area(weight, height) {
    const area = weight * height
    if (area > 20) {
        console.log(`Value above permited : ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area(2, 3, 4, 5, 6, 7, 70, 80))
console.log(area(70, 80))