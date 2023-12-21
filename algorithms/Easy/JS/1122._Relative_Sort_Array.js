const relativeSortArray = function(arr1, arr2) {
    const map = new Map();

    for (let i = 0 ; arr2.length > i; i++) {
        map.set(arr2[i], i);
    }

    return arr1.sort(
        (a,b) =>
            (!map.has(a) ? arr1.length + a : map.get(a)) -
            (!map.has(b) ? arr1.length + b : map.get(b))
    );
};