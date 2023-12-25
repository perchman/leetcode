const distinctDifferenceArray = function(nums) {
    const set = new Set();
    const res = [];

    for (let num of nums) {
        set.add(num);
        res.push(set.size);
    }

    set.clear();

    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = res[i] - set.size;
        set.add(nums[i]);
    }

    return res;
};