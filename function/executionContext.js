const value = 'Global'

function myFunction() {
    console.log(value)
}

function exec() {
    const value = 'Local'
    myFunction()
}

exec()
/*
 * a function search variables on defined context
 * so don't matter the execution context
 * Running: value = Global
*/