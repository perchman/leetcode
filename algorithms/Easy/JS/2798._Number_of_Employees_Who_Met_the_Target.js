/** https://leetcode.com/problems/number-of-employees-who-met-the-target/description/ */

const numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;

    for (let i of hours) {
        if (i >= target) {
            count++;
        }
    }

    return count;
};