const answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b);

    const ans = [];

    for (let query of queries) {
        let temp = 0;

        for (let num of nums) {
            if (query - num >= 0) {
                query -= num;
                temp++;
            }
        }

        ans.push(temp);
    }

    return ans;
};