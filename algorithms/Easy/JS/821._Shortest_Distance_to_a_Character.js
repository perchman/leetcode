/** https://leetcode.com/problems/shortest-distance-to-a-character/description/ */

const shortestToChar = function(s, c) {
    const result = [];

    for (let i = 0; s.length > i; i++) {
        if (s[i] === c) {
            result.push(0);
        } else {
            let left = i - 1,
                right = i + 1;

            while (left >= 0 || right < s.length) {
                if (left >= 0 && s[left] === c) {
                    result.push(i - left);
                    break;
                }
                if (right < s.length && s[right] === c) {
                    result.push(right - i);
                    break;
                }

                left--;
                right++;
            }
        }
    }

    return result;
};