const minimumOperations = function(nums) {
    const set = new Set(nums);

    return set.has(0) ? set.size - 1 : set.size;
};