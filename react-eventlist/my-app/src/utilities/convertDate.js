export const convertDate = (str) => {
  const date = new Date(Number(str));
  const year = date.getFullYear().toString();
  var month = date.getMonth();
  var day = date.getDate();

  if (date.getMonth() == 0) {
    month = "01";
  } else if (date.getMonth() < 10) {
    month = "0" + month;
  }

  if (date.getDate() < 10) {
    day = "0" + day;
  }

  var newDate = `${year}-${month}-${day}`;
  return newDate.toString();
};
