const minSubsequence = function(nums) {
    nums.sort((a, b) => b - a);

    const result = [];

    let i = 0,
        j = nums.length-1,
        sum = 0;

    while (j >= i) {
        if (sum > 0) {
            sum -= nums[j];
            j--;
        } else {
            sum += nums[i];
            result.push(nums[i]);
            i++;
        }
    }

    if (sum <= 0) {
        result.push(nums[i])
    }


    return result;
};