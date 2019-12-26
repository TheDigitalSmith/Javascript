const arr = [1, 2, 3, 4, 5, 7];
const empty = []
console.log(getMax(arr));

function getMax(array){
    if ( array.length == 0){
        return undefined;
    }
    return Math.max(...array)
}

// function getMax(array) {
//     let max = array[0];
//     if (array.length == 0)
//         return undefined
//         for (let i = 1; i < array.length; i++)
//             if (array[i] > max) {
//                 max = array[i];
//             }
//     return max
// }

// function getMax (array) {
//     if (array.length == 0) {
//         return undefined
//     }
//     return array.reduce((accumulator, current)=> (accumulator > current) ? accumulator : current);
// }
