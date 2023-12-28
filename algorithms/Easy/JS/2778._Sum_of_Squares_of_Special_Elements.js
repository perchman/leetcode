const sumOfSquares = function(nums) {
    let result = 0;

    for (let i = 1; nums.length >= i * i; i++) {
        if (nums.length % i === 0) {
            result += nums[i - 1] ** 2;

            if (nums.length / i !== i) {
                result += nums[nums.length / i - 1] ** 2;
            }
        }
    }

    return result;
};