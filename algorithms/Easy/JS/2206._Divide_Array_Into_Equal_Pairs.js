const divideArray = function(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }

    return set.size === 0;
};