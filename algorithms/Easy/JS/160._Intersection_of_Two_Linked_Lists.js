const getLength = function(head) {
    let length = 0;

    while (head !== null) {
        length++;
        head = head.next;
    }

    return length;
};

const getIntersectionNode = function(headA, headB) {
    let lenA = getLength(headA),
        lenB = getLength(headB);

    while (lenA > lenB) {
        headA = headA.next;
        lenA--;
    }

    while (lenB > lenA) {
        headB = headB.next;
        lenB--;
    }

    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }

    return headA;
};