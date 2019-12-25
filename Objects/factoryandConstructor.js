//factory function
function getAddress (street, city, zipCode){
    return {street,
    city,
    zipCode}
}

const address = getAddress(433, "mantin", 71700)
console.log(address); 

//constructor function 
function GetAddress (street, city, zipCode){
    this.street = street
    this.city = city
    this.zipCode = zipCode
}

const myaddress = new GetAddress(433, "mantin", 71700)
console.log(myaddress);