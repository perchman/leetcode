/** https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/ */

const smallerNumbersThanCurrent = function(nums) {
    const count = new Array(101).fill(0);

    for (let num of nums) {
        count[num]++;
    }

    for (let i = 1; count.length > i; i++) {
        count[i] += count[i - 1];
    }

    const result = [];

    for (const num of nums) {
        result.push(num === 0 ? 0 : count[num - 1]);
    }

    return result;
};