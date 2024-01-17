const mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode();
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list2.val > list1.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
};