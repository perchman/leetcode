/** https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/ */

const getDecimalValue = function(head) {
    let binaryString = '';

    while (head !== null) {
        binaryString += head.val;
        head = head.next;
    }

    return parseInt(binaryString, 2);
};