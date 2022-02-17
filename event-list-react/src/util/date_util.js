export const dateCalc = (value) => {
  let result = new Date();
  result.setTime(value);
  let year = result.getUTCFullYear();
  let month = result.getUTCMonth() + 1;
  let date = result.getUTCDate();

  month = month < 10 ? '0' + month : date;
  date = date < 10 ? '0' + date : date;

  return `${year}-${month}-${date}`;
}

export const dateConvert = (value) => {
  let result = new Date(value).getTime() + '';
  
  return result;
}

export const dateValidation = (startDate, endDate) => {
  startDate = dateConvert(startDate);
  endDate = dateConvert(endDate);

  console.log(endDate - startDate >= 0);

  return endDate - startDate >= 0 ;
}