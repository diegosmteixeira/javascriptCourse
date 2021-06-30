const manufacturers = ["Mercedes", "Audi", "BMW"]

function print(name, indice) {
    console.log(`${indice + 1}, ${name}`)
}

manufacturers.forEach(print)
manufacturers.forEach(function(a){
    console.log(a)
})
manufacturers.forEach(manufacturers => console.log(manufacturers))

//callback function print for every element inside manufacturers