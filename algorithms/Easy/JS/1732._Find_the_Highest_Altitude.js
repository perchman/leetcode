const largestAltitude = function(gain) {
    let prevPoint = 0;
    let maxAltitude = 0;

    for (let point of gain) {
        prevPoint += point;
        maxAltitude = maxAltitude > prevPoint ? maxAltitude : prevPoint;
    }

    return maxAltitude;
};