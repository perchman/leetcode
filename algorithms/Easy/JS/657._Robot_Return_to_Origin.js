/** https://leetcode.com/problems/robot-return-to-origin/description/ */

const judgeCircle = function(moves) {
    const history = new Map();

    for (let move of moves) {
        history.set(move, (history.get(move) || 0) + 1);
    }

    if (
        history.get('R') === history.get('L') &&
        history.get('U') === history.get('D')
    ) {
        return true;
    }

    return false;
};