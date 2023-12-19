const maximumValue = function(strs) {
    let maxValue = 0;

    for (let str of strs) {
        let value = 0;

        if (/^\d+$/.test(str)) {
            value = parseInt(str, 10);
        } else {
            value = str.length;
        }

        maxValue = Math.max(maxValue, value);
    }

    return maxValue;
};