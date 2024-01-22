/** https://leetcode.com/problems/two-sum/description/ */

const twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; nums.length > i; i++) {
        const diff = target - nums[i];

        if (map.has(diff)) return [i, map.get(diff)];

        map.set(nums[i], i);
    }
};