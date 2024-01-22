/** https://leetcode.com/problems/sort-array-by-parity/description/ */

const sortArrayByParity = function(nums) {
    const ans = new Array(nums.length);
    let i = 0,
        j = nums.length - 1;

    for (let num of nums) {
        if (num % 2 === 0) {
            ans[i] = num;
            i++;
        } else {
            ans[j] = num;
            j--;
        }
    }

    return ans;
};