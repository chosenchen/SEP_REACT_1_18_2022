export const convertToDate = (ms) => {
  const convertToDate = new Date(+ms);

  return convertToDate.toISOString().substring(0, 10);
};

export const convertToUnix = (date) => {
  let convertToUnix = new Date(date).getTime().toString();

  return convertToUnix;
};