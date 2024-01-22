/** https://leetcode.com/problems/find-the-peaks/description/ */

const findPeaks = function(mountain) {
    const ans = [];

    for (let i = 0; mountain.length > i + 2; i++) {
        if (
            mountain[i] < mountain[i + 1] &&
            mountain[i + 1] > mountain[i + 2]
        ) {
            ans.push(i + 1);
        }
    }

    return ans;
};