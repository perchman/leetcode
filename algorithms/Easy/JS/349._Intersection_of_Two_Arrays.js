const intersection = function(nums1, nums2) {
    const set = new Set(nums1);

    const result = [];

    for (let num of nums2) {
        if (set.has(num)) {
            result.push(num);
            set.delete(num);
        }
    }

    return result;
};