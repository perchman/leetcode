const findFinalValue = function(nums, original) {
    const numsSet = new Set(nums);

    while (numsSet.has(original)) {
        original *= 2;
    }

    return original;
};