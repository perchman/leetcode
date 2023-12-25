const isValid = function(s) {
    const brackets = [];
    
    for (let bracket of s) {
        if (
            bracket === '(' ||
            bracket === '[' ||
            bracket === '{'
        ) {
            brackets.push(bracket);
        } else {
            const temp = brackets.pop();

            if (
                bracket === ')' && temp !== '(' ||
                bracket === ']' && temp !== '[' ||
                bracket === '}' && temp !== '{'
            ) {
                return false;
            }
        }
    }

    return brackets.length === 0 ? true : false;
};