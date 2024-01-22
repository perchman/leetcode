/** https://leetcode.com/problems/rearrange-characters-to-make-target-string/description/ */

const rearrangeCharacters = function(s, target) {
    const map1 = new Map(),
        map2 = new Map();

    let max = Infinity;

    for (let char of s) {
        map1.set(char, (map1.get(char) || 0) + 1);
    }

    for (let char of target) {
        map2.set(char, (map2.get(char) || 0) + 1);
    }

    for (let [char, count] of map2) {
        if ((map1.get(char) || 0) < count) return 0;

        max = Math.min(max, Math.floor((map1.get(char) || 0) / count));
    }

    return max;
};