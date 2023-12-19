const checkString = function(s) {
    let foundB = false;

    for (let char of s) {
        if (char === 'a') {
            if (foundB) {
                return false;
            }
        } else {
            foundB = true;
        }
    }

    return true;
};