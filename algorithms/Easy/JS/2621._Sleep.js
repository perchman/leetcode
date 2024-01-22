/** https://leetcode.com/problems/sleep/description/ */

async function sleep(millis) {
    return new Promise(res => setTimeout(res, millis));
}