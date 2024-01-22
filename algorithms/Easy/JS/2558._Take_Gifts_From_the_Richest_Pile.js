/** https://leetcode.com/problems/take-gifts-from-the-richest-pile/description/ */

const pickGifts = function(gifts, k) {
    const queue = new MaxPriorityQueue();

    for (const gift of gifts) {
        queue.enqueue(gift);
    }

    while (--k >= 0) {
        const maxGift = queue.dequeue().element;
        const remaining = Math.floor(Math.sqrt(maxGift));
        queue.enqueue(remaining);
    }

    let ans = 0;

    while (!queue.isEmpty()) {
        ans += queue.dequeue().element;
    }

    return ans;
};