const maxLengthBetweenEqualCharacters = function(s) {
    let first = new Map();
    let last = new Map();
    let ans = -1;

    for (let i = 0; s.length > i; i++) {
        if (!first.has(s[i])) {
            first.set(s[i], i);
        }

        last.set(s[i], i);
    }

    for (const [char, i] of first) {
        ans = Math.max(ans, last.get(char) - i - 1);
    }

    return ans;
};