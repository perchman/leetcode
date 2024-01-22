/** https://leetcode.com/problems/middle-of-the-linked-list/description/ */

const middleNode = function(head) {
    let slow = head,
        fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};