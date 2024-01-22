/** https://leetcode.com/problems/truncate-sentence/description/ */

const truncateSentence = function(s, k) {
    let result = '';
    let count = 1;

    for (let i of s) {
        if (i === ' ') {
            count++;

            if (count > k) {
                break;
            }
        }

        result += i;
    }

    return result;
};