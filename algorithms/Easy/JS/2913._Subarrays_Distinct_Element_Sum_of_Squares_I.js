/** https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/description/ */

const sumCounts = function(nums) {
    let count = 0;

    for (let i = 0; nums.length > i; i++){
        const set=new Set();

        for (let j = i; nums.length > j; j++){
            set.add(nums[j]);
            count += Math.pow(set.size, 2);
        }

    }

    return count;
};