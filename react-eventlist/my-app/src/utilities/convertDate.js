export const convertDate = (timestamp) => {
  try {
    return new Date(+timestamp).toISOString().substring(0, 10);
  } catch {
    return "";
  }
};
export const convertToMill = (date) => {
  try {
    return "" + new Date(date).getTime();
  } catch {
    return "";
  }
};
