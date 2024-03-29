/** https://leetcode.com/problems/find-the-difference/description/ */

const findTheDifference = function(s, t) {
    const map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (!map.has(char)) {
            return char;
        } else {
            map.set(char, map.get(char) - 1);

            if (map.get(char) === 0) {
                map.delete(char);
            }
        }
    };
};