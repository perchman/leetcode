/** https://leetcode.com/problems/invert-binary-tree/description/ */

const invertTree = function(root) {
    if (!root) {
        return null;
    }

    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);

    return root;
};