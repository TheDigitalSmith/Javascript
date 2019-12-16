// Conditions 
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => "Not a number"
let outcome = fizzBuzz(true)

function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return console.log("Not a number")
    } else {
        if (input % 3 == 0 && input % 5 == 0) return console.log("FizzBuzz")
        else if (input % 3 == 0) return console.log("Fizz")
        else if (input % 5 == 0) return console.log("Buzz")
        else if (input % 3 != 0 || input % 5 != 0) return console.log(input)
    }
}

// function fizzBuzz (input){
//     if( typeof input !== "number") return console.log(NaN);

//     if ((input % 3 == 0) && (input % 5 == 0)) return console.log("FizzBuzz");
//     if (input % 3 == 0) return console.log("Fizz");
//     if (input % 5 == 0) return console.log("Buzz");
//     return console.log(input)

// }