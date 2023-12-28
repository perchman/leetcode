const sumZero = function(n) {
    let arr = new Array(n);

    for (let i = 0; n > i; i++) {
        arr[i] = i * 2 - n + 1;
    }

    return arr;
};