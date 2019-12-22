showStars(5);

// My solution using repeat method 
// function showStars (rows){
//     for(let i = 0; i <= rows; i++){
//         let stars = "*"
//         let numberOfStars = stars.repeat(i)
//         console.log(numberOfStars)
//     }
// }

// Solution using for loops
function showStars(rows) {
    let pattern = "";
    for (let i = 0; i < rows; i++) {
        let stars = "*";
        pattern += stars
        console.log(pattern)
    }
}

//MOSH's solution
// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//         let pattern = "";
//         for (let i = 0; i < row; i++)
//             pattern += "*"
//         console.log(pattern)
//     }
// }

