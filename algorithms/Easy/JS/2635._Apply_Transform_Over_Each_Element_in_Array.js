/** https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/ */

const map = function(arr, fn) {
    const newArr = new Array(arr.length);

    for (let i = 0; arr.length > i; i++) {
        newArr[i] = (fn(arr[i], i));
    }

    return newArr;
};