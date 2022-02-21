export const convertTimestampToDateValue = (timestamp) =>{
    try{
        return new Date(+timestamp).toISOString().substring(0,10) //console.log will trigger something as a string to present
 
    }catch{
        return ''
    }
}

export const convertDateValueToTimestamp = (dateValue) =>{
    try{
        return '' +new Date(dateValue).getTime() //convert Date format to timestamp
 
    }catch{
        return ''
    }
}

