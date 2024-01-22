/** https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/description/ */

const maxSubsequence = function(nums, k) {
    const queue = new MinPriorityQueue({
        compare: (a, b) => b.number > a.number
    });

    for (let i = 0; nums.length > i; i++) {
        queue.enqueue({ number: nums[i], position: i });
    }

    const ans = [];

    while (k-- > 0) {
        ans.push(queue.dequeue());
    }

    return ans.sort((a, b) => a.position - b.position).map(v => v.number);
};