/** https://leetcode.com/problems/relative-ranks/description/ */

const findRelativeRanks = function(score) {
    const sorted = score.slice().sort((a, b) => b - a);

    return score.map((s) => {
        const place = sorted.indexOf(s) + 1;
        if (place === 1) return 'Gold Medal';
        if (place === 2) return 'Silver Medal';
        if (place === 3) return 'Bronze Medal';

        return place.toString();
    });
};