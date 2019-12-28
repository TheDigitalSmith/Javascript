
// let numbers2 = [1, 2, 3, 4, 5, 1, 2, 1]
let numbers2 = 1
// console.log(countOccurences(numbers1, 1))
try {
console.log(countOccurences(numbers2, 2))
}
catch(e){
    console.log(e.message)
}

// function countOccurences(array, searchElement) {
//     let output = 0;
//     for (let element of array)
//         if (element === searchElement) {
//             output++
//         }
//     return output
// }

function countOccurences ( array, searchElement){
    if (!Array.isArray(array))
        throw new Error ('Input must be an array')
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0
        return accumulator + occurence
    },0)
}