/** https://leetcode.com/problems/minimum-common-value/description/ */

const getCommon = function(nums1, nums2) {
    const set = new Set(nums1);

    for (let num of nums2) {
        if (set.has(num)) return num;
    }

    return -1;
};