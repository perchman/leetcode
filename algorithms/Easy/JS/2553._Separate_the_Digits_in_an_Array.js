/** https://leetcode.com/problems/separate-the-digits-in-an-array/description/ */

const separateDigits = function(nums) {
    const ans = [];

    for (let num of nums) {
        if (num.toString().length > 1) {
            for (let char of num.toString()) {
                ans.push(parseInt(char));
            }
        } else {
            ans.push(num);
        }
    }

    return ans;
};