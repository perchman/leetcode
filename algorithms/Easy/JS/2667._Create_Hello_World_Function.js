/** https://leetcode.com/problems/create-hello-world-function/description/ */

const createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};