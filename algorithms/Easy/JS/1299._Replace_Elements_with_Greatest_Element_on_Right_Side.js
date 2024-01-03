const replaceElements = function(arr) {
    let max = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        const temp = arr[i];
        arr[i] = max;
        max = Math.max(max, temp);
    }

    return arr;
};