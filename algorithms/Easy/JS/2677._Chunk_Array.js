/** https://leetcode.com/problems/chunk-array/description/ */

const chunk = function(arr, size) {
    const result = [];

    for (let i = 0; arr.length > i; i = i + size) {
        let subarray = [];

        for (let j = i; arr.length > j && i + size > j; j++) {
            subarray.push(arr[j]);
        }

        result.push(subarray);
    }

    return result;
};