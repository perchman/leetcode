const NumArray = function(nums) {
    this.sum = [0];

    for (let i = 0; nums.length > i; i++) {
        this.sum[i + 1] = this.sum[i] + nums[i];
    }
};

NumArray.prototype.sumRange = function(left, right) {
    return this.sum[right + 1] - this.sum[left];
};