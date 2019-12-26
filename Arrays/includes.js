let array = [1, 2, 3, 4, 5]
includes(array, 5)
console.log(includes(array, 2))

//My solution
function includes(array, searchElement) {
    const exist = (array.filter(element => element === searchElement))
    const convert = exist.join("")
    if (convert != "") {
        return true
    }
    return false
}

// Alternative solution (Ask Diego why this function works without the codeblock but not with it)
// function includes(array, searchElement) {
//     for (let element of array)
//         if (element === searchElement) {
//             return true
//         }
//     return false
// }