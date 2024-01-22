/** https://leetcode.com/problems/missing-number/description/ */

const missingNumber = function(nums) {
    let xor = 0;

    for (let i = 0; nums.length >= i; i++) {
        xor ^= i;
    }

    for (let num of nums) {
        xor ^= num;
    }

    return xor;
};