let array = [1, 2, 3, 4, 5]
let result = includes(array, 5)
console.log(includes(array,4))

//My solution
function includes(array, searchElement) {
    const exist = (array.filter(element => element === searchElement))
    const convert = exist.join("")
    if (convert != "") {
        return true
    }
    return false
}

//Alternative solution (Mosh)
// function includes(array, searchElement) {
//     for (let element of array) 
//         if (element === searchElement) {
//             return true
//         }
//     return false
// }