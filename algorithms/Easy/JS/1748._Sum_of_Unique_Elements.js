/** https://leetcode.com/problems/sum-of-unique-elements/description/ */

const sumOfUnique = function(nums) {
    const unique = new Set();
    const deleted = new Set();
    let sum = 0;

    for (let num of nums) {
        if (!deleted.has(num)) {
            if (unique.has(num)) {
                unique.delete(num);
                deleted.add(num);
                sum -= num;
            } else {
                unique.add(num);
                sum += num;
            }
        }
    }

    return sum;
};