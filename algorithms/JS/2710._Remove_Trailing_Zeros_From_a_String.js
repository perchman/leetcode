const removeTrailingZeros = function(num) {
    if (num[num.length - 1] !== '0') {
        return num;
    }

    let count = 0;

    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] !== '0') {
            break;
        }

        count++;
    }

    return num.substring(0, num.length - count);
};