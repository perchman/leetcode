// https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/

const fillCups = function(amount) {
    const queue = new MaxPriorityQueue();

    for (let a of amount) {
        queue.enqueue(a);
    }

    let ans = 0;

    while (true) {
        let a = queue.dequeue().element;
        let b = queue.dequeue().element;

        if (a == 0 || b == 0) {
            ans = ans + (a + b);
            return ans;
        } else {
            ans++;
            a--;
            b--;

            queue.enqueue(a);
            queue.enqueue(b);
        }
    }
};