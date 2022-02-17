import React from 'react';
import {dateCalc, dateConvert, dateValidation} from '../util/date_util';

class EventItemIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editing : false,
      event : {
        eventName : this.props.event.eventName,
        startDate : dateCalc(this.props.event.startDate),
        endDate : dateCalc(this.props.event.endDate)
      }
    }

    this.setEditing = this.setEditing.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  setEditing(){
    this.setState({editing : !this.state.editing});
  }

  handleChange(field){
    return e => this.setState(prevState => {
      return { 
        event : {
          ...prevState.event,
          [field]: e.target.value
        }
      }
    });
  }

  handleSubmit(){
    const {getEvents, editEvent, setList} = this.props;
    const {event} = this.state ; 
    const newEvent = {
      id : this.props.event.id,
      eventName : event.eventName,
      startDate: dateConvert(event.startDate),
      endDate: dateConvert(event.endDate)
    }

    editEvent(newEvent).then(getEvents).then((data) => setList(data)).then(this.setEditing);
  }

  handleDelete(){
    const {event, deleteEvent, getEvents, setList} = this.props;
    deleteEvent(event.id).then(getEvents).then((data) => setList(data))
  }
  
  render(){
    const {event, editing} = this.state;
    const startDate = event.startDate;
    const endDate = event.endDate;

    return (
      <tr>
        <td><input className='input-box' type='text' 
              defaultValue={`${event.eventName}`}
              disabled={!editing } 
              onChange={this.handleChange('eventName')}/>
        </td>
        <td><input className='input-box' type='date' 
              defaultValue={`${startDate}`} 
              disabled={!editing}
              onChange={this.handleChange('startDate')}/>
        </td>
        <td>
          <input className='input-box' type='date' 
            defaultValue={`${endDate}`} 
            disabled={!editing}
            onChange={this.handleChange('endDate')}/>
        </td>
        <td className='action-btns'>
          <button className='buttons edit-btn'
            onClick={editing ? this.handleSubmit : this.setEditing}
            disabled={editing && !dateValidation(startDate, endDate)}>{editing ? 'SAVE' : 'EDIT'}</button>
          <button className='buttons delete-btn'
            onClick={editing ? this.setEditing : this.handleDelete}>{editing ? 'CLOSE' : 'DELETE'}</button>
        </td>
      </tr>
    )
  }
}

export default EventItemIndex; 