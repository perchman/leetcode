const reverseVowels = function(s) {
    const arr = s.split('');
    const set = new Set('aeiouAEIOU');

    let l = 0,
        r = arr.length - 1;

    while (r > l) {
        if (set.has(arr[l]) && set.has(arr[r])) {
            const temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;

            l++;
            r--;
        } else if (!set.has(arr[l])) {
            l++;
        } else {
            r--;
        }
    }

    return arr.join('');
};