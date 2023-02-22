const hq = 42;
const distance = distanceTravelledInFeet(start, destination);

function distanceFromHqInBlocks(start) {
    if (start > hq) {
        return (start - hq);
    }
    if (start <= hq) {
        return (hq - start);
    }
}

function distanceFromHqInFeet(start) {
    return distanceFromHqInBlocks(start) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return ((start - destination) * 264);
    }
    if (start <= destination) {
        return ((destination - start) * 264);
    }
}

/* function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return (((distanceTravelledInFeet(start, destination) * 0.02) - 8).toFixed(2))
    }
    else if (distanceTravelledInFeet(start, destination) > 2000) {
        return 25
    }
    else if (distanceTravelledInFeet(start, destination) > 2500) {
        return (`cannot travel that far`)
    }
}*/

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    const dist = distance - 400;

    if (distance < 400) {
        return 0;
    }
    else if (distance > 400 && distance < 2000) {
        return dist * 0.02;
    }
    else if (distance > 2000 && distance < 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}
    