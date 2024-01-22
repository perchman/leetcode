/** https://leetcode.com/problems/to-be-or-not-to-be/description/ */

const expect = function(val) {
    const value = val;

    function toBe(testValue) {
        if (value !== testValue) {
            throw new Error('Not Equal');
        }

        return true;
    }

    function notToBe(testValue) {
        if (value === testValue) {
            throw new Error('Equal');
        }

        return true;
    }

    return {
        toBe,
        notToBe
    }
};