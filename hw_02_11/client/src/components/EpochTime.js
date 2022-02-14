const convertStringtoISO = (string) => {
    let date = new Date;
    date.setMilliseconds(string);
    return date.toISOString().split('T')[0]
}

const convertDatetoString = (string) => {
    let date = new Date(string);
    return String(date.getTime())
}

const EpochTime = { convertDatetoString, convertStringtoISO}

export default EpochTime;