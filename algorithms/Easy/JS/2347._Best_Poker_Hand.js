/** https://leetcode.com/problems/best-poker-hand/description/ */

const bestHand = function(ranks, suits) {
    if (new Set(suits).size === 1) {
        return 'Flush';
    }

    const ranksMap = new Map();

    let result = {count: 0, hand: null};

    for (let rank of ranks) {
        ranksMap.set(rank, (ranksMap.get(rank) || 0) + 1);

        const count = ranksMap.get(rank);

        if (count > result.count) {
            result.count = count;

            if (count >= 3) {
                result.hand = "Three of a Kind";
            } else if (count === 2) {
                result.hand = "Pair";
            } else {
                result.hand = "High Card";
            }
        }
    }

    return result.hand;
};