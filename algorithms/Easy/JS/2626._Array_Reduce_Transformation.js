/** https://leetcode.com/problems/array-reduce-transformation/description/ */

const reduce = function(nums, fn, init) {
    let result = init;

    for (let i of nums) {
        result = fn(result, i);
    }

    return result;
};