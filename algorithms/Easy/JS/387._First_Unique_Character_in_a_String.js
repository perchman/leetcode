const firstUniqChar = function(s) {
    const map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let i = 0; s.length > i; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};