/** https://leetcode.com/problems/sort-by/description/ */

const sortBy = function(arr, fn) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; arr.length > i; i++) {
        if (fn(arr[i]) - fn(pivot) < 0) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...sortBy(left, fn), pivot, ...sortBy(right, fn)];
};