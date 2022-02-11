import React from 'react';
import {dateCalc, dateConvert} from '../util/date_util';

class EventItemIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editing : false
    }
  }

  render(){
    const {event} = this.props ;
    const editing = this.state;
    const startDate = dateCalc(event.startDate);
    const endDate = dateCalc(event.endDate);

    return (
      <tr>
        <td><input className='input-box' type='text' defaultValue={`${event.eventName}`} disabled={editing } /></td>
        <td><input className='input-box' type='date' defaultValue={`${startDate}`} disabled={editing}/></td>
        <td><input className='input-box' type='date' defaultValue={`${endDate}`} disabled={editing}/></td>
        <td className='action-btns'>
        <button className='buttons edit-btn' id={`${event.id}`}>EDIT</button>
          <button className='buttons delete-btn' id={`${event.id}`}>DELETE</button>
        </td>
      </tr>
    )
  }
}

export default EventItemIndex; 