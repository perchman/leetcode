/** https://leetcode.com/problems/find-the-difference-of-two-arrays/description/ */

const findDifference = function(nums1, nums2) {
    const nums1Set = new Set(nums1);

    for (let num of nums2) {
        nums1Set.delete(num);
    }

    const nums2Set = new Set(nums2);

    for (let num of nums1) {
        nums2Set.delete(num);
    }

    return [[...nums1Set], [...nums2Set]];
};