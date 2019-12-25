const userAddress = {
    street: "433, College Heights Garden Resort",
    city: "Mantin",
    zipCode: 71700
}

function showAddress (address){
    for (let key in address){
       console.log( key , address[key])
    }
}

showAddress(userAddress);
// console.log(showAddress(address));