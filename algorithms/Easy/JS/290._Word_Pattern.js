/** https://leetcode.com/problems/word-pattern/description/ */

const wordPattern = function(pattern, s) {
    const arr = s.split(' ');
    const map1 = new Map();
    const map2 = new Map();

    if (pattern.length !== arr.length) return false;

    for (let i = 0; arr.length > i; i++) {
        if (!map1.has(pattern[i]) && !map2.has(arr[i])) {
            map1.set(pattern[i], arr[i]);
        }
        if (!map2.has(arr[i])) {
            map2.set(arr[i], pattern[i]);
        }

        if (map1.get(pattern[i]) !== arr[i]) return false;
    }

    return true;
};