/** https://leetcode.com/problems/delete-greatest-value-in-each-row/description/ */

const deleteGreatestValue = function(grid) {
    for (let arr of grid) {
        arr.sort((a, b) => b - a);
    }

    let ans = 0;

    for (let i = 0; grid[0].length > i; i++) {
        let max = -Infinity;

        for (let arr of grid) {
            max = Math.max(max, arr[i]);
        }

        ans += max;
    }

    return ans;
};