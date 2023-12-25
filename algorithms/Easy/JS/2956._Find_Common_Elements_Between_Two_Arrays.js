const findIntersectionValues = function(nums1, nums2) {
    const set1 = new Set(nums1),
          set2 = new Set(nums2);

    let count1 = 0,
        count2 = 0;

    for (let num of nums1) {
        if (set2.has(num)) {
            count1++;
        }
    }

    for (let num of nums2) {
        if (set1.has(num)) {
            count2++;
        }
    }

    return [count1, count2];
};