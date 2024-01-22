/** https://leetcode.com/problems/count-complete-tree-nodes/description/ */

const nodeExists = function(node, index, height) {
    let left = 0, right = Math.pow(2, height) - 1;

    for (let i = 0; height > i; i++) {
        const mid = Math.floor((left + right) / 2);

        if (mid >= index) {
            node = node.left;
            right = mid;
        } else {
            node = node.right;
            left = mid + 1;
        }
    }

    return !!node;
}

const binarySearchLastLevel = function(node, height) {
    let left = 0,
        right = Math.pow(2, height) - 1;

    while (right > left) {
        const mid = Math.ceil((left + right) / 2);

        if (nodeExists(node, mid, height)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return left + 1;
}

const getHeight = function(node) {
    let height = 0;

    while (node.left) {
        height++;
        node = node.left;
    }

    return height;
}

const countNodes = function(root) {
    if (!root) {
        return 0;
    }

    const height = getHeight(root);

    if (height === 0) {
        return 1;
    }

    const lastLevelNodes = binarySearchLastLevel(root, height);

    return Math.pow(2, height) - 1 + lastLevelNodes;
}





