let orientation = isLandScape(300,400);
console.log(orientation);

function isLandScape (width, height){
    return ( width> height)
}

// function isLandScape ( width, height) {
//     if ( width > height) return console.log ("It is landscape")
//     return console.log("It's portrait")
// }

// function isLandScape ( width,height){
//     return (width>height)? "Landscape" : "Portrait"    
// }