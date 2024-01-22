/** https://leetcode.com/problems/allow-one-function-call/description/ */

const once = function(fn) {
    return function(...args) {
        if(fn) {
            const callback = fn(...args);
            fn = null;
            return callback;
        }

        return undefined;
    }
};