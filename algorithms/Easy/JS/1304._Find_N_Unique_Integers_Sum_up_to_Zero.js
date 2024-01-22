/** https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/description/ */

const sumZero = function(n) {
    let arr = new Array(n);

    for (let i = 0; n > i; i++) {
        arr[i] = i * 2 - n + 1;
    }

    return arr;
};