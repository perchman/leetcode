const isPalindrome = function(s) {
    const upgradedS = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    for (let i = 0, j = upgradedS.length - 1; j >= i; i++, j--) {
        if (upgradedS[i] !== upgradedS[j]) return false;
    }

    return true;
};