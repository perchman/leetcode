/** https://leetcode.com/problems/largest-3-same-digit-number-in-string/description/ */

const largestGoodInteger = function(num) {
    const countNum = { num: null, count: 0 };
    let maxNum = '';

    for (let char of num) {
        if (countNum.num === char) {
            countNum.count += 1;

            if (countNum.count === 3) {
                maxNum = maxNum > (char + char + char) ? maxNum : (char + char + char);
            }
        } else {
            countNum.num = char;
            countNum.count = 1;
        }
    }

    return maxNum;
};