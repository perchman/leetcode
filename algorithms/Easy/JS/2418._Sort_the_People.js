const sortPeople = function(names, heights) {
    let arr = [];

    for (let i = 0; names.length > i; i++) {
        arr.push({ name: names[i], height: heights[i] });
    }

    arr.sort((a, b) => b.height - a.height);

    return arr.map(person => person.name);
};