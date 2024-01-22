/** https://leetcode.com/problems/minimum-number-game/description/ */

const numberGame = function(nums) {
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; nums.length > i; i += 2) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
    }

    return nums;
};