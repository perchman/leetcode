const findNonMinOrMax = function(nums) {
    if(nums.length<3) return -1;

    let a = nums[0],
        b = nums[1],
        c = nums[2];

    if ((a > b && a < c) || (a < b && a > c)) {
        return a;
    } else if ((b > a && b < c) || (b < a && b > c)) {
        return b;
    } else {
        return c;
    }
};