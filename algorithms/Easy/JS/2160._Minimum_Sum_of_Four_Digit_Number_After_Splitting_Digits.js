const minimumSum = function(num) {
    const str = num.toString().split('').sort();

    return parseInt(str[0] + str[2]) + parseInt(str[1] + str[3]);
};