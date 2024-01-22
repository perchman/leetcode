/** https://leetcode.com/problems/matrix-diagonal-sum/description/ */

const diagonalSum = function(mat) {
    let result = 0;

    for(let i = 0; mat.length > i; i++) {
        result += mat[i][i];

        if (mat.length - 1 - i !== i) {
            result += mat[i][mat.length - 1 - i];
        }
    }

    return result;
};