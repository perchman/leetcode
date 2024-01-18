const isSameTree = function(p, q) {
    const valTraversal = (node, arr) => {
        if (!node) return;

        arr.push(node.val);

        valTraversal(node.left, arr);

        if (!node.right) {
            arr.push(null);
        } else {
            valTraversal(node.right, arr);
        }
    }

    const pArr = [],
          qArr = [];

    valTraversal(p, pArr);
    valTraversal(q, qArr);

    return JSON.stringify(pArr) === JSON.stringify(qArr);
};