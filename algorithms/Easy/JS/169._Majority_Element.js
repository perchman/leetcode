/** https://leetcode.com/problems/majority-element/description/ */

const majorityElement = function(nums) {
    const count = new Map();
    let majorityElem = 0;

    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);

        if (count.get(num) > (count.get(majorityElem) || 0)) {
            majorityElem = num;
        }
    }

    return majorityElem;
};