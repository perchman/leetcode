const mergeArrays = function(nums1, nums2) {
    const obj = {};

    for (let num of nums1) {
        obj[num[0]] = num[1];
    }

    for (let num of nums2) {
        obj[num[0]] = (obj[num[0]] || 0) + num[1];
    }

    const result = [];

    for (let key in obj) {
        result.push([key, obj[key]]);
    }

    return result;
};