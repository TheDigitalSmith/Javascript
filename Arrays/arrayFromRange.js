const arrayOfNumbers = arrayFromRange(-2,10);
console.log(arrayOfNumbers)

function arrayFromRange (min,max){
    const output = []
    for (let i = min; i<=max;i++){
        output.push(i)
    }
    return output
}