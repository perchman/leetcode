/** https://leetcode.com/problems/count-tested-devices-after-test-operations/description/ */

const countTestedDevices = function(batteryPercentages) {
    let count = 0;

    for (let i = 0; batteryPercentages.length > i; i++) {
        if (batteryPercentages[i] > 0) {
            for (let j = i + 1; batteryPercentages.length > j; j++) {
                batteryPercentages[j]--;
            }

            count++;
        }
    }

    return count;
};