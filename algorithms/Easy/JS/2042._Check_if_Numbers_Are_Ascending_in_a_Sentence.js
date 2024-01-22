/** https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/description/ */

const areNumbersAscending = function(s) {
    let prevNum = 0;
    let num = 0;

    for (let char of s) {
        if (char >= '0' && char <= '9') {
            num = num * 10 + parseInt(char);
        } else if (num > 0) {
            if (prevNum >= num) {
                return false;
            }

            prevNum = num;
            num = 0;
        }
    }

    if (num !== 0 && prevNum >= num) {
        return false;
    }

    return true;
};