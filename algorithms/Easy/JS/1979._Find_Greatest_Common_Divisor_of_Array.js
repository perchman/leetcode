/** https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/ */

const findGCD = function(nums) {
    let min = Math.min(...nums),
        max = Math.max(...nums);

    while (max !== 0) {
        const temp = max;
        max = min % max;
        min = temp;
    }

    return min;
};