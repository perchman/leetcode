const countStudents = function(students, sandwiches) {
    let studentIndex = 0;
    let sandwichIndex = 0;
    let ans = 0;

    while (students.length > studentIndex) {
        if (students.length - studentIndex === ans) {
            break;
        }

        if (sandwiches[sandwichIndex] === students[studentIndex]) {
            sandwichIndex++;
            ans = 0;
        } else {
            students.push(students[studentIndex]);
            ans++;
        }

        studentIndex++;
    }

    return ans;
};