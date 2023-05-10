// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return 50 - location;
}

function distanceFromHqInFeet(distance) {
    let distanceCovered = distanceFromHqInBlocks(distance)
    return distanceCovered * 264
}

function distanceTravelledInFeet(start, destination) {
    let distanceTravelled = destination - start
    distanceFromHqInFeet(distanceTravelled)
}

function calculatesFarePrice(start, destination) {
    let distanceCoveredInFeet = distanceTravelledInFeet(start, destination);
    
    if (distanceCoveredInFeet <= 400) {
        return 0
    } else if (distanceCoveredInFeet > 400 && distanceCoveredInFeet <= 2000) {
        return (distanceCoveredInFeet - 400) * 2
    } else if (distanceCoveredInFeet > 2000 && distanceCoveredInFeet < 2500) {
        return 0
    } else {
        return 'cannot travel that far'
    }
}