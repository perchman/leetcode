const canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => a - b);

    for (let i = 2; arr.length > i; i++) {
        if (arr[1] - arr[0] !== arr[i] - arr[i - 1]) {
            return false;
        }
    }

    return true;
};