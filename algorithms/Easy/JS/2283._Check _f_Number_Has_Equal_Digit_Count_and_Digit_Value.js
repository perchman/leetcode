const digitCount = function(num) {
    const count = new Map();

    for (let char of num) {
        count.set(parseInt(char), (count.get(parseInt(char)) || 0) + 1);
    }

    for (let i = 0; num.length > i; i++) {
        if ((count.get(i) || 0) !== parseInt(num[i])) {
            return false;
        }
    }

    return true;
};