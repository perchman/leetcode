/** https://leetcode.com/problems/reverse-linked-list/description/ */

const reverseList = function(head) {
    // Iterative
    let prev = null;
    let current = head;

    while (current !== null) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;

    // Recursive
    // if (head === null || head.next === null) {
    //     return head;
    // }

    // const reversed = reverseList(head.next);
    // head.next.next = head;
    // head.next = null;

    // return reversed;
};