export const timestampToStr = (timestamp) => {
  // const date = new Date(+timestamp);

  // const yearStr = `${date.getFullYear()}`;

  // let monthStr = `${+date.getMonth() + 1}`;
  // if (monthStr.length === 1) {
  //   monthStr = "0" + monthStr;
  // }

  // let dayStr = `${date.getDate()}`;
  // if (dayStr.length === 1) {
  //   dayStr = "0" + dayStr;
  // }

  // return `${yearStr}-${monthStr}-${dayStr}`;

  try {
    return new Date(+timestamp).toISOString().substring(0, 10);
  } catch {
    return "";
  }
};

export const dateStrToTimestamp = (dateStr) => {
  // const timestamp = new Date(dateStr);
  // return timestamp.valueOf();

  try {
    return "" + new Date(dateStr).getTime();
  } catch {
    return "";
  }
};
