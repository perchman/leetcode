const isPalindrome = function(head) {
    let slow = head,
        fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null,
        curr = slow;

    while (curr !== null) {
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    let first = head,
        second = prev;

    while (second !== null) {
        if (first.val !== second.val) {
            return false;
        }

        first = first.next;
        second = second.next;
    }

    return true;
};