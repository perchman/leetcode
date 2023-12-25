const countBinarySubstrings = function(s) {
    let res = 0,
        prev = 0,
        cur = 1;

    for (let i = 1; s.length > i; i++) {
        if (s[i - 1] !== s[i]) {
            res += Math.min(prev, cur);
            prev = cur;
            cur = 1;
        } else {
            cur += 1;
        }
    }

    return res + Math.min(prev, cur);
};