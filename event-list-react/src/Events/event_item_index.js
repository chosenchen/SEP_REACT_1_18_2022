import React from 'react';
import {dateCalc, dateConvert} from '../util/date_util';

class EventItemIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editing : false,
      eventName : this.props.event.eventName,
      startDate : this.props.event.startDate,
      endDate : this.props.event.endDate
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
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(){
    const {getEvents, editEvent, setList} = this.props; 
    const event = {
      eventName : this.state.eventName,
      startDate: dateConvert(this.state.startDate),
      endDate: dateConvert(this.state.endDate)
    }

    editEvent(event).then(getEvents).then((data) => setList(data)).then(this.setEditing);
  }

  handleDelete(){
    const {event, deleteEvent, getEvents, setList} = this.props;
    deleteEvent(event.id).then(getEvents).then((data) => setList(data))
  }
  render(){
    const {event} = this.props ;
    const {editing} = this.state;
    const startDate = dateCalc(event.startDate);
    const endDate = dateCalc(event.endDate);

    return (
      <tr>
        <td><input className='input-box' type='text' defaultValue={`${event.eventName}`} disabled={!editing } /></td>
        <td><input className='input-box' type='date' defaultValue={`${startDate}`} disabled={!editing}/></td>
        <td><input className='input-box' type='date' defaultValue={`${endDate}`} disabled={!editing}/></td>
        <td className='action-btns'>
          <button className='buttons edit-btn' id={`${event.id}`} 
            onClick={editing ? this.handleSubmit : this.setEditing}>{editing ? 'SAVE' : 'EDIT'}</button>
          <button className='buttons delete-btn' id={`${event.id}`}
            onClick={editing ? this.setEditing : this.handleDelete}>{editing ? 'CLOSE' : 'DELETE'}</button>
        </td>
      </tr>
    )
  }
}

export default EventItemIndex; 