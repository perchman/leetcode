/** https://leetcode.com/problems/number-of-senior-citizens/description/ */

const countSeniors = function(details) {
    let count = 0;

    for (let detail of details) {
        if (detail[11] + detail[12] > 60) {
            count++;
        };
    }

    return count;
};