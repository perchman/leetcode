/** https://leetcode.com/problems/symmetric-tree/description/ */

const isSymmetric = function(root) {
    if (!root) return true;

    const isMirror = (left, right) => {
        if (!left && !right) return true;

        if (!left || !right) return false;

        return (
            left.val === right.val &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
        );
    }

    return isMirror(root.left, root.right);
};