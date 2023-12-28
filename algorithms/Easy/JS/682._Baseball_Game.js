const calPoints = function(operations) {
    const ans = [];

    for (let operation of operations) {
        switch (operation) {
            case 'C':
                ans.pop();
                break;

            case 'D':
                ans.push(ans[ans.length - 1] * 2);
                break;

            case '+':
                ans.push(ans[ans.length - 1] + ans[ans.length - 2]);
                break;

            default:
                ans.push(parseInt(operation));
                break;
        }
    }

    return ans.reduce((acm, value) => acm + value, 0);
};