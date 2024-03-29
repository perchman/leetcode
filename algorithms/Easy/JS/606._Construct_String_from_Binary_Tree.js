/** https://leetcode.com/problems/construct-string-from-binary-tree/description/ */

const tree2str = function(root) {
    if (!root) {
        return '';
    }

    let result = root.val.toString();

    if (root.left || root.right) {
        result += `(${tree2str(root.left)})`;
    }

    if (root.right) {
        result += `(${tree2str(root.right)})`;
    }

    return result;
};