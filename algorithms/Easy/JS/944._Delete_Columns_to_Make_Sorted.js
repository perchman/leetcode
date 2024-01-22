/** https://leetcode.com/problems/delete-columns-to-make-sorted/description/ */

const minDeletionSize = function(strs) {
    let count = 0;

    for (let j = 0; strs[0].length > j; j++) {
        for (let i = 0; strs.length - 1 > i; i++) {
            if (strs[i][j].charCodeAt(0) > strs[i + 1][j].charCodeAt(0)) {
                count++;
                break;
            }
        }
    }

    return count;
};