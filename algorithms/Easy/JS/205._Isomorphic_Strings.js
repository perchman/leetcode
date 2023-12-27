const isIsomorphic = function(s, t) {
    for (let i = 0; s.length > i; i++) {
        if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) return false;
    }

    return true;
};