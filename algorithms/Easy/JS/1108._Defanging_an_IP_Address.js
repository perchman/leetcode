/** https://leetcode.com/problems/defanging-an-ip-address/description/ */

const defangIPaddr = function(address) {
    let result = "";

    for (let symbol of address) {
        if (symbol === '.') {
            result += '[.]';
        } else {
            result += symbol;
        }
    }

    return result;
};