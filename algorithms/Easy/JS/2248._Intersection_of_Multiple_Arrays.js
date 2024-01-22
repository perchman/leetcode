/** https://leetcode.com/problems/intersection-of-multiple-arrays/description/ */

const intersection = function(nums) {
    let arr = nums[0];

    for (let i = 1; nums.length > i; i++) {
        let arrI = [];

        for (let num of nums[i]) {
            if (arr.includes(num)) {
                arrI.push(num);
                arr.splice(arr.indexOf(num), 1);
            }
        }

        arr = arrI;
    }

    arr.sort((a, b) => a - b);

    return arr;
};