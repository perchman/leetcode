/** https://leetcode.com/problems/last-stone-weight/description/ */

const lastStoneWeight = function(stones) {
    const queue = new MaxPriorityQueue();

    for (const stone of stones) {
        queue.enqueue(stone);
    }

    while (queue.size() > 1) {
        const x = queue.dequeue().element;
        const y = queue.dequeue().element;

        if (x !== y) {
            queue.enqueue(x - y);
        }
    }

    return queue.size() === 1 ? queue.dequeue().element : 0;
};