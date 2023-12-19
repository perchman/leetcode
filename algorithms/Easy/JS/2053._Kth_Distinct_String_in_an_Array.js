const kthDistinct = function(arr, k) {
    const strs = new Map();

    for (let str of arr) {
        strs.set(str, (strs.get(str) || 0) + 1);
    }

    let count = 0;

    for (let [str, value] of strs) {
        if (value === 1) {
            count++;

            if (count === k) {
                return str;
            }
        }
    }

    return '';
};