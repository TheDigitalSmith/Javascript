// Speed Limit = 70
// for every 5 above speed limit => 1 point
// Math.floor()
// 12 points => suspended
let status = speedLimit(100)

function speedLimit (speed){
    const LIMIT = 70;
    const KMPERPOINT = 5;
    if (speed <= LIMIT + KMPERPOINT) {
        return console.log ("OK")
    }
    const points = Math.floor((speed - LIMIT) /KMPERPOINT)
    if (points >= 12)
            return console.log("License suspended")
    else
        return console.log(points, "Points")
}