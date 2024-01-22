/** https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/ */

const findFinalValue = function(nums, original) {
    const numsSet = new Set(nums);

    while (numsSet.has(original)) {
        original *= 2;
    }

    return original;
};