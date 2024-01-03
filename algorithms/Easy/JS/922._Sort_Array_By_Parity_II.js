const sortArrayByParityII = function(nums) {
    let i = 0;
    let j = 1;

    while (i < nums.length && j < nums.length) {
        while (i < nums.length && nums[i] % 2 === 0) {
            i += 2;
        }

        while (j < nums.length && nums[j] % 2 === 1) {
            j += 2;
        }

        if (i < nums.length && j < nums.length) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    return nums;
};