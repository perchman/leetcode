/** https://leetcode.com/problems/count-items-matching-a-rule/description/ */

const countMatches = function(items, ruleKey, ruleValue) {
    const indexes = {
        type: 0,
        color: 1,
        name: 2
    }

    let count = 0;

    for(let item of items) {
        if (item[indexes[ruleKey]] === ruleValue) {
            count++;
        }
    }

    return count;
};