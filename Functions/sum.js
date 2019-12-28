console.log(sum(1, 2, 3, 4, 5, 6, 8,20))
// sum(1,2,3,4,5)

// function sum (){
//     let sum = 0
//     for ( value of arguments)
//     sum += value
//     return sum
// }

function sum(...arg) {
    if(arg.length === 1 && Array.isArray(arg[0])){
        arg = [...arg[0]]
    }
    return arg.reduce((a, b) => a + b)
}
