const inorderTraversal = function(root) {
    const stack = [],
        ans = [];

    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            ans.push(root.val);
            root = root.right;
        }
    }

    return ans;
};