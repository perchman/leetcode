/** https://leetcode.com/problems/decode-xored-array/description/ */

const decode = function(encoded, first) {
    const result = [first];

    for (let i = 1; encoded.length + 1 > i; i++) {
        result.push(encoded[i - 1] ^ result[i - 1]);
    }

    return result;
};