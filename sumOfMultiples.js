
sum(10);

function sum(limit){
    let totalOfMultipleOf3 = 0
    let totalOfMultipleOf5 = 0
    for(let i = 0; i <= limit; i++){
        if (i * 3 <= limit){
            totalOfMultipleOf3 += i*3
            console.log("multiple of 3", totalOfMultipleOf3)
        }
        if (i*5 <= limit){
            totalOfMultipleOf5 += i*5
            console.log("multiple of 5", totalOfMultipleOf5)
        }
        
    }
    let total = totalOfMultipleOf5 + totalOfMultipleOf3
    console.log(total)
}

//Mosh's way
// function sum (limit){
//     let sum = 0 

//     for( let i = 0; i <= limit; i++){
//         if( i % 3 === 0 || i % 5 === 0){
//             sum +=i
//         }
//     }
//     console.log(sum)
// }