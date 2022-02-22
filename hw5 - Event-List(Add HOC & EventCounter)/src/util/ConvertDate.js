// function to format date
// export const getDate = (str) => {
//     const time = new Date(+str);
//     const year = time.getFullYear().toString();
//     let month = (+time.getMonth() + 1).toString();
//     if (month.length < 2) {
//         month = '0' + month;
//     }
//     let day = time.getDate().toString();
//     if (day.length < 2) {
//         day = '0' + day;
//     }  
//     return [year, month, day].join('-');
// }

// export const getMill = (date) => {
//     const ms = new Date(date);
//     return ms.getTime();
// }

export const getDate = (timestamp) => {
    try {
      return new Date(+timestamp).toISOString().substring(0, 10);
    } catch {
      return '';
    }
};
  
export const getMill = (dateValue) => {
    try {
      return '' + new Date(dateValue).getTime();
    } catch {
      return '';
    }
};

