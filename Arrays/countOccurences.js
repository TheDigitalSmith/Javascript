
let numbers1 = [1, 2, 3, 4, 5, 1, 2, 1]

console.log(countOccurences(numbers1, 1))
// countOccurences(numbers, 1)

function countOccurences(array, searchElement) {
    let output = 0;
    for (let element of array)
        if (element === searchElement) {
            output++
        }
    return output
}

// function countOccurences ( array, searchElement){
//     return array.reduce((accumulator, current) => {
//         const occurence = (current === searchElement) ? 1 : 0
//         return accumulator + occurence
//     },0)
// }