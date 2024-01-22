/** https://leetcode.com/problems/contains-duplicate-ii/description/ */

const containsNearbyDuplicate = function(nums, k) {
    const set = new Set();

    for (let i = 0; nums.length > i; i++) {
        if (set.has(nums[i])) return true;

        set.add(nums[i]);

        if (set.size > k) set.delete(nums[i - k]);
    }

    return false;
};