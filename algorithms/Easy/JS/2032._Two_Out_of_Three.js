/** https://leetcode.com/problems/two-out-of-three/description/ */

const twoOutOfThree = function(nums1, nums2, nums3) {
    let result = [];

    for (let i = 1; 100 >= i; i++) {
        if (nums1.includes(i) && nums2.includes(i)) {
            result.push(i)
        }
        else if (nums1.includes(i) && nums3.includes(i)) {
            result.push(i)
        }
        else if (nums2.includes(i) && nums3.includes(i)) {
            result.push(i)
        }
    }

    return result;
};