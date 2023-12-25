const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
};

const reformatDate = function(date) {
    const [day, month, year] = date.split(' ');

    const createDay = (str) => {
        if (str.length === 3) {
            return '0' + str[0];
        } else {
            return str[0] + str[1];
        }
    }

    return `${year}-${months[month]}-${createDay(day)}`;
};