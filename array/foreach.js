const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//Callback for each element
//first parameter = name, second = index (you always need use 'name' if wanna try use index)
approved.forEach(function(name, index) {
    console.log(`${index + 1}) ${name}`) 
 })

 approved.forEach(name => console.log(name))

 const showApproved = approved => console.log(approved)
 approved.forEach(showApproved)

 //You also have a third parameter = the own array
 approved.forEach(function(name, index, array) {
    console.log(`${index + 1}) ${name}`)
    console.log(array)
 })