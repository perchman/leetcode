const frequencySort = function(nums) {
    const counts = new Map();

    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    return nums.sort((a, b) => {
        if (counts.get(a) !== counts.get(b)) {
            return counts.get(a) - counts.get(b);
        } else {
            return b - a;
        }
    });
};