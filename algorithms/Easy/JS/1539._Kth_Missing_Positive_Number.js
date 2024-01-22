/** https://leetcode.com/problems/kth-missing-positive-number/description/ */

const findKthPositive = function(arr, k) {
    let i = 0,
        j = arr.length;

    while (j > i) {
        const m = Math.floor((i + j) / 2);

        if (k > (arr[m] - m - 1)) {
            i = m + 1;
        } else {
            j = m;
        }
    }

    return i + k;
};