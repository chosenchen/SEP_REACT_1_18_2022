export const dateConvert = (date) => {
    //TODO: add try catch
    let d = new Date(+date);
    return d.toISOString().substring(0, 10);
    // return d.toLocaleString('en-GB').slice(0, 10);
};