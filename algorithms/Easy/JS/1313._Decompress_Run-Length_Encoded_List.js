/** https://leetcode.com/problems/decompress-run-length-encoded-list/description/ */

const decompressRLElist = function(nums) {
    const result = [];

    for (let i = 0; nums.length > i; i += 2) {
        result.push(...Array(nums[i]).fill(nums[i + 1]));
    }

    return result;
};