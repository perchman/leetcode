const maximizeSum = function(nums, k) {
    const max = Math.max(...nums);

    const sum1 = max * (max - 1) / 2;
    const sum2 = (max + k) * (max + k - 1) / 2;

    return sum2 - sum1;
};