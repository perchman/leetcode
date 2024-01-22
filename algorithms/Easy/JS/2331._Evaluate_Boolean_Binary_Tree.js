/** https://leetcode.com/problems/evaluate-boolean-binary-tree/description/ */

const evaluateTree = function(root) {
    if (root.val === 0 || root.val === 1) {
        return root.val === 1;
    }

    const left = evaluateTree(root.left),
        right = evaluateTree(root.right);

    if (root.val === 2) {
        return left || right;
    } else {
        return left && right;
    }
};