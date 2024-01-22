/** https://leetcode.com/problems/search-insert-position/description/ */

const searchInsert = function(nums, target) {
    let i = 0,
        j = nums.length - 1;

    while (j >= i) {
        const m = Math.floor((i + j) / 2);

        if (nums[m] === target) return m;

        if (nums[m] > target) {
            j = m - 1;
        } else {
            i = m + 1;
        }
    }

    return i;
};