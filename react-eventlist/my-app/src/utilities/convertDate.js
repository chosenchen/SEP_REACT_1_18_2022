export const convertDate = (str) => {
  const date = new Date(Number(str));
  const year = date.getFullYear().toString();
  const month = date.toLocaleString("en-US", { month: "2-digit" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const newDate = `${year}-${month}-${day}`;
  return newDate;
};
export const convertToUnix = (date) => {
  const newDate = new Date(date).getTime().toString();
  return newDate;
};
