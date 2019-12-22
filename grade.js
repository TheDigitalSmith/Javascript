const results = [69, 69, 69];

calculateGrade(results);
// Tash's way using functions applicable to arrays
// function calculateGrade (marks){
//     const total = marks.reduce((a,b)=> a+b, 0)
//     const average = total/marks.length
//     if(average <= 59){
//         return console.log(average, "F")
//     }else if (average<=69) {
//         return console.log(average, "D")
//     }else if ( average <= 79){
//         return console.log(average, "C")
//     }else if ( average <= 89){
//         return console.log(average, "B")
//     }else{
//         return console.log(average , "A")
//     }
// }

function calculateGrade(marks) {
    let sum = 0
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i]
    }
    let average = sum/marks.length
    if (average <= 59) {
        console.log(average, "F")
    } else if (average <= 69) {
       console.log(average, "D")
    } else if (average <= 79) {
         console.log(average, "C")
    } else if (average <= 89) {
        console.log(average, "B")
    } else {
        console.log(average, "A")
    }
}

//MOSH SINGLE RESPONSIBILITY PRINCIPLE
//Note ( Use for of function)-> it takes the value of each object of an array straight 

// grade(results);

// function calculateAverage(array){
//     let sum = 0
//     for (let value of array){
//         sum += value
//     }
//     const average = sum/array.length
//     return average;
// }


// function grade (marks){
//     let averageMarks = calculateAverage(marks)
//     if (averageMarks <= 59) {
//         console.log(averageMarks, "F")
//     } else if (averageMarks <= 69) {
//        console.log(averageMarks, "D")
//     } else if (averageMarks <= 79) {
//          console.log(averageMarks, "C")
//     } else if (averageMarks <= 89) {
//         console.log(averageMarks, "B")
//     } else {
//         console.log(averageMarks, "A")
//     }
// }