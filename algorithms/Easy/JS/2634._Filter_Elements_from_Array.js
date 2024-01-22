/** https://leetcode.com/problems/filter-elements-from-array/description/ */

const filter = function(arr, fn) {
    const filteredArr = [];

    for (let i = 0; arr.length > i; i++) {
        if(fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
};