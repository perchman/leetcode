const lengthOfLastWord = function(s) {
    let count = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ' && count === 0) {
            continue;
        } else if (s[i] === ' ') {
            return count;
        } else {
            count++;
        }
    }

    return count;
};