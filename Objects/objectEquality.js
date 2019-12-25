let address1 = new getAddress(433, "mantin", 71700);
let address2 = new getAddress(433, "mantin", 71700);
let address3 = address1

function GetAddress ( street, city, postcode){
    this.street = street;
    this.city = city;
    this.postcode = postcode;
}

// To see if the value of properties of the objects are exactly the same i.e 
// traffic1.light = green 
//traffic2.light = green 
// traffic1.light === traffic2.light
//(green ===green)
//if all the value of the properties are the same between the objects then it is considered Equal 
function areEqual ( address1, address2){
    return address1.street === address2.street && address1.city === address2.city && address1.postcode ===address2.postcode
}

console.log(areEqual(address1, address2));

//To see if the objects created are referencing the same object since objects are reference types
function areSame ( address1, address2){
    return address1 === address2
}
//address 1 is not of the same object as address 2
console.log(areSame(address1,address2))
//address 1 is of the same object as address 3
console.log(areSame(address1,address3))