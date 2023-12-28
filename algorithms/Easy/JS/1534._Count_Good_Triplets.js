const countGoodTriplets = function(arr, a, b, c) {
    let count = 0;

    for (let i = 0; arr.length > i; i++) {
        for (let j = i + 1; arr.length > j; j++) {
            for (let k = j + 1; arr.length > k; k++) {
                const conditions = [
                    Math.abs(arr[i] - arr[j]) <= a,
                    Math.abs(arr[j] - arr[k]) <= b,
                    Math.abs(arr[i] - arr[k]) <= c,
                ];\

                if (conditions.indexOf(false) === -1) count++;
            }
        }
    }

    return count;
};