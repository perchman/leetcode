/** https://leetcode.com/problems/find-the-town-judge/description/ */

const findJudge = function(n, trust) {
    const arr1 = new Array(n + 1).fill(0),
        arr2 = new Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        arr2[a]++;
        arr1[b]++;
    }

    for (let i = 1; n >= i; i++) {
        if (arr1[i] === n - 1 && arr2[i] === 0) {
            return i;
        }
    }

    return -1;
};