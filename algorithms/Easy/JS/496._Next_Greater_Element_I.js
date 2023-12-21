const nextGreaterElement = function(nums1, nums2) {
    const map = new Map();

    for (let i = 0; nums2.length > i; i++) {
        map.set(nums2[i], i);
    }

    const result = [];

    outerLoop: for (let num of nums1) {
        if (map.has(num)) {
            for (let j = map.get(num); nums2.length > j; j++) {
                if (nums2[j] > num) {
                    result.push(nums2[j]);
                    continue outerLoop;
                }
            }

            result.push(-1);
        } else {
            result.push(-1);
        }
    }

    return result;
};