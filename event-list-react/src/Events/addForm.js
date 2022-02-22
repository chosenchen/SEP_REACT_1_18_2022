import React from 'react';
import {dateConvert} from '../util/date_util';

class AddForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      eventName : '',
      startDate : '',
      endDate : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(){
    const {setAdding, addNewEvent} = this.props; 
    const event = {
      eventName : this.state.eventName,
      startDate: dateConvert(this.state.startDate),
      endDate: dateConvert(this.state.endDate)
    }

    addNewEvent(event).then(setAdding);
  }

  render(){
    const {setAdding} = this.props;
    return (
      <tr className='tr-index'>
        <td><input className='input-box' type='text' onChange={this.handleChange('eventName')}/></td>
        <td><input className='input-box' type='date' onChange={this.handleChange('startDate')}/></td>
        <td><input className='input-box' type='date' onChange={this.handleChange('endDate')}/></td>
        <td className='action-btns'>
          <input type='submit' className='buttons add-btn' value="ADD" onClick={this.handleSubmit}/>
          <input type='button' className='buttons close-btn' defaultValue="CLOSE" onClick={setAdding}/>
        </td>
      </tr>
    )
  }
} 

export default AddForm;