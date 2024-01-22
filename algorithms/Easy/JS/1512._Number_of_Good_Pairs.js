/** https://leetcode.com/problems/number-of-good-pairs/description/ */

const numIdenticalPairs = function(nums) {
    const count = {};
    let goodPairs = 0;

    for (let i of nums) {
        count[i] = (count[i] || 0) + 1;
        goodPairs += (count[i] - 1);
    }

    return
};