const destCity = function(paths) {
    const cities = new Set();

    for (const path of paths) {
        cities.add(path[0]);
    }

    for (const path of paths) {
        if (!cities.has(path[1])) {
            return path[1];
        }
    }

    return "";
};