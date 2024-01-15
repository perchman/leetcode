const intersect = function(nums1, nums2) {
    const map = new Map();

    for (let num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const ans = [];

    for (let num of nums2) {
        if (map.has(num)) {
            ans.push(num);

            map.set(num, map.get(num) - 1);

            if (map.get(num) === 0) map.delete(num);
        }
    }

    return ans;
};