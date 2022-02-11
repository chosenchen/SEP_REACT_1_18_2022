export const convertToDate = (ms) => {
    const date = new Date(+ms);
  
    return date.toISOString().split("").splice(0, 10).join("");
  };
  
  export const convertToUnix = (date) => {
    let convertToUnix = new Date(date).getTime().toString();
  
    return convertToUnix;
  };