/** https://leetcode.com/problems/richest-customer-wealth/description/ */

const maximumWealth = function(accounts) {
    let result = 0;

    for (let account of accounts) {
        let sum = 0;

        for (let num of account) {
            sum += num;
        }

        result = Math.max(result, sum);
    }

    return result;
};