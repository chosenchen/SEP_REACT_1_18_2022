import {
    convertTimestampToDateValue,
    convertDateValueToTimestamp
} from '../utils/date.help'

export default class EventData{
    constructor(eventName, startDate, endDate, id){
        this.eventName = eventName
        this.startDate = startDate
        this.endDate = endDate
        if(id!==undefined){
            this.id = id
        }
        if(!startDate.includes('-') && !endDate.includes('-')) this.parseDateValue();
      
         
    }

    parseDateValue(){
        this.startDate = convertTimestampToDateValue(this.startDate)
        this.endDate = convertTimestampToDateValue(this.endDate)
    }

    parseTimeStamp(){
        this.startDate = convertDateValueToTimestamp(this.startDate)
        this.endDate = convertDateValueToTimestamp(this.endDate)
    }

    isValidForSave(){
        return (!!this.eventName &&//Check if the value is truthy
          !this.startDate.includes('-')&&
          !this.endDate.includes('-')&&
          +this.startDate < +this.endDate
        )
    }
}
