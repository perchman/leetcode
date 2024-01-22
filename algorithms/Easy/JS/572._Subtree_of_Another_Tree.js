/** https://leetcode.com/problems/subtree-of-another-tree/description/ */

const isSameTree = function(tree1, tree2) {
    if (!tree1 && !tree2) return true;

    if (!tree1 || !tree2) return false;

    return (
        tree1.val === tree2.val &&
        isSameTree(tree1.left, tree2.left) &&
        isSameTree(tree1.right, tree2.right)
    );
};

const isSubtree = function(root, subRoot) {
    if (!root) return false;

    if (isSameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};