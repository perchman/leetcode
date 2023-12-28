const busyStudent = function(startTime, endTime, queryTime) {
    let count = 0;

    for (let i = 0; startTime.length > i; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) count++;
    }

    return count;
};