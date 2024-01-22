/** https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/ */

const sort = function(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; arr.length > i; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...sort(left), pivot, ...sort(right)];
};

const countPairs = function(nums, target) {
    nums = sort(nums);

    let count = 0;
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] + nums[right] < target) {
            count += right - left;
            left++;
        } else {
            right--;
        }
    }

    return count;
};