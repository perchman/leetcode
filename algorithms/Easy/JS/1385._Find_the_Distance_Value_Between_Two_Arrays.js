/** https://leetcode.com/problems/find-the-distance-value-between-two-arrays/description/ */

const findTheDistanceValue = function(arr1, arr2, d) {
    const isDistanceValid = (num) => {
        for (const el of arr2) {
            if (d >= Math.abs(num - el)) {
                return false;
            }
        }

        return true;
    };

    let count = 0;

    for (const num of arr1) {
        if (isDistanceValid(num)) count++;
    }

    return count;
};