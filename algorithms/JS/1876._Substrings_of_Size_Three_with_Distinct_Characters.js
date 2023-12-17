const countGoodSubstrings = function(s) {
    let count = 0;

    outerLoop: for (let i = 0; s.length - 2 > i; i++) {
        const substring = (s[i] + s[i + 1] + s[i + 2]);
        const chars = new Set();

        for (let char of substring) {
            if (chars.has(char)) {
                continue outerLoop;
            } else {
                chars.add(char);
            }
        }

        count++;
    }

    return count;
};