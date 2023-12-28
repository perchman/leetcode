const diStringMatch = function(s) {
    const result = [];
    let I = 0,
        D = s.length;

    for (let char of s) {
        if (char === "I") {
            result.push(I);
            I++;
        } else {
            result.push(D);
            D--;
        }
    }

    result.push(s[s.length - 1] === "I" ? D : I);

    return result;
};