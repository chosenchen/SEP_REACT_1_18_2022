// function to format date
export const getDate = (str) => {
    const time = new Date(+str);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return [year, month, day].join('-');
}

export const getMill = (date) => {
    const ms = new Date(date).getTime().toString();
    return ms;
}

