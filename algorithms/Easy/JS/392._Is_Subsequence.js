const isSubsequence = function(s, t) {
    if (s.length > t.length) return false;

    let i = 0;
    for (let char of t) {
        if (char === s[i]) {
            i++;
        }
    }

    return i === s.length;
};