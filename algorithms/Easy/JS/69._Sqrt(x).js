const mySqrt = function(x) {
    if (1 >= x) return x;

    let i = 1,
        j = i * i;

    while (x >= j) {
        i++;
        j = i * i;
    }

    return Math.floor(i - 1);
};