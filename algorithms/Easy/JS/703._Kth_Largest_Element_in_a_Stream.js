/** https://leetcode.com/problems/kth-largest-element-in-a-stream/description/ */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 0) {
            return null;
        }

        const root = this.heap[0],
            last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }

        return root;
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[index] >= this.heap[parentIndex]) {
                break;
            }

            [
                this.heap[index],
                this.heap[parentIndex]
            ] = [
                this.heap[parentIndex],
                this.heap[index]
            ];

            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;

        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let smallest = index;

            if (
                this.heap.length > leftChild &&
                this.heap[smallest] > this.heap[leftChild]
            ) {
                smallest = leftChild;
            }

            if (
                this.heap.length > rightChild &&
                this.heap[smallest] > this.heap[rightChild]
            ) {
                smallest = rightChild;
            }

            if (smallest === index) {
                break;
            }

            [
                this.heap[index],
                this.heap[smallest]
            ] = [
                this.heap[smallest],
                this.heap[index]
            ];

            index = smallest;
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }
}

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinHeap();

        for (const num of nums) {
            this.add(num);
        }
    }

    add(val) {
        if (this.k > this.minHeap.size()) {
            this.minHeap.push(val);
        } else if (val > this.minHeap.peek()) {
            this.minHeap.pop();
            this.minHeap.push(val);
        }

        return this.minHeap.peek();
    }
}