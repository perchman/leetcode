/** https://leetcode.com/problems/row-with-maximum-ones/description/ */

const rowAndMaximumOnes = function(mat) {
    let ans = [0, 0];

    for (let i = 0; mat.length > i; i++) {
        let count = 0;

        for (let j = 0; mat[i].length > j; j++) {
            if (mat[i][j] !== 0) count++;
        }

        if (count > ans[1]) ans = [i, count];
    }

    return ans;
};