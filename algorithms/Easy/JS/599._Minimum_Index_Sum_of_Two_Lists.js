/** https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/ */

const findRestaurant = function(list1, list2) {
    const map = new Map();

    for (let i = 0; list1.length > i; i++) {
        map.set(list1[i], i);
    }

    let sum = Infinity;
    const result = [];

    for (let j = 0; list2.length > j; j++) {
        if (map.has(list2[j])) {
            const current = j + map.get(list2[j]);

            if (sum > current) {
                sum = current;
                result.length = 0;
                result.push(list2[j]);
            } else if (current === sum) {
                result.push(list2[j]);
            }
        }
    }

    return result;
};