const minTimeToVisitAllPoints = function(points) {
    let count = 0;

    for (let i = 1; i < points.length; i++) {
        const [x1, y1] = points[i - 1];
        const [x2, y2] = points[i];

        const xDistance = Math.abs(x2 - x1);
        const yDistance = Math.abs(y2 - y1);

        count += Math.max(xDistance, yDistance);
    }

    return count;
};