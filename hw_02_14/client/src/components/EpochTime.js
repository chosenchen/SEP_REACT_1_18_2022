const convertStringtoISO = (string) => {
    try{
        let date = new Date();
        date.setMilliseconds(string);
        return date.toISOString().split('T')[0]
    } catch {
        return ''
    }
    
}

const convertDatetoString = (string) => {
    try{
        let date = new Date(string);
        return String(date.getTime())
    }catch {
        return ''
    }
    
}

const EpochTime = { convertDatetoString, convertStringtoISO}

export default EpochTime;