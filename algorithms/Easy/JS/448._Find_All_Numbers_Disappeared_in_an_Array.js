/** https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/ */

const findDisappearedNumbers = function(nums) {
    const result = [];

    for (let num of nums) {
        const i = Math.abs(num) - 1;

        if (nums[i] > 0) {
            nums[i] = -nums[i];
        }
    }

    for (let i = 0; nums.length > i; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
};