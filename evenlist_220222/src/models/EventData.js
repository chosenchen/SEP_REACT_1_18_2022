import {
  convertTimestampToDateValue,
  convertDateValueToTimeStamp
} from '../utils/date.help'

export default class EventData {
  constructor(eventName, startDate, endDate, id) {
    this.eventName = eventName;
    this.startDate = startDate;
    this.endDate = endDate;
    if (id !== undefined) {
      this.id = id;
    }
    if (!startDate.includes('-') && !endDate.includes('-')) {
      this.parseDateValue();
    }
  }

  parseDateValue() {
    this.startDate = convertTimestampToDateValue(this.startDate);
    this.endDate = convertTimestampToDateValue(this.endDate);
  }
  parseTimeStamp() {
    this.startDate = convertDateValueToTimeStamp(this.startDate);
    this.endDate = convertDateValueToTimeStamp(this.endDate);
  }
  isValidForSave() {
    return (
      !!this.eventName &&
      !this.startDate.includes('-') &&
      !this.endDate.includes('-') &&
      +this.startDate < +this.endDate
    );
  }
}

//Convert to function not working properly, have trouble

//function EventData (eventName, startDate, endDate, id) {
//   const [state, setState] = useState({
//     eventName: eventName,
//     startDate: startDate,
//     endDate: endDate,
//     id: id
// })

// if (!state.startDate.includes('-') && !state.endDate.includes('-')) {
//  parseDateValue();
// }

  

//   const parseDateValue=()=> {
//     setState({
//        startDate: convertTimestampToDateValue(state.startDate),
//        endDate: convertTimestampToDateValue(state.endDate)
//     })
//   }

//   const parseTimeStamp=()=> {
//     setState({
//        startDate: convertDateValueToTimeStamp(state.startDate),
//        endDate: convertDateValueToTimeStamp(state.endDate)
//     })
//   }
 
//   const isValidForSave=()=> {
//     return (
//       !!state.eventName &&
//       !state.startDate.includes('-') &&
//       !state.endDate.includes('-') &&
//       +state.startDate < +state.endDate
//     );
//   }
// }

// export default EventData
