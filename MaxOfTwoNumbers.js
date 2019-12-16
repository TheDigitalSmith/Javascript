let number = max(2,3);
console.log(number);

// function max (a,b){
//     if (a > b){
//         console.log(a);
//         return a
//     } else {
//         console.log(b);
//         return b
//     }
// }

// (A clean way of writing code)
// function max (a,b){       
//     if (a>b) return a
//     else return b

// ( A cleaner way of writing the same code)
//     if (a>b) return a; 
//     return b;
// }

// ( The cleanest way of writing code using condtional operator)
function max(a,b){   
return (a > b)? a : b 
}