import React from 'react';
import { API } from '../util/api';
import EventItemIndex from './eventItemRow';
import { withEventData } from '../HOC/withEventData';
import AddForm from './addForm';

class EventIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      adding : false ,
    }

    this.setAdding = this.setAdding.bind(this);
  }

  setAdding(){
    this.setState({adding : !this.state.adding});
  }

  render(){
    const {eventList} = this.props;
    const {adding} = this.state;
    return (
      <div>
        <div className='add-new-btn-container'>
            <button className='add-new-btn' onClick={this.setAdding}>ADD NEW</button>
        </div>
        <table>
          <thead>
            <tr className='events-header-container'>
              <th className='col-header'>Event name</th>
              <th className='col-header'>Start date</th>
              <th className='col-header'>End date</th>
              <th className='col-header action-header'>Actions</th> 
            </tr>
          </thead>
          <tbody id='eventlist-container'>
            {
              eventList && eventList.map(event => 
                <EventItemIndex 
                key={`event-${event.id}`} 
                event={event}
                editEvent = {this.props.editEvent}
                deleteEvent = {this.props.deleteEvent}
                eventUpcoming={this.props.eventUpcoming}
                />
              )
            }
            {
              adding && <AddForm 
              getEvents={API.getEvents}
              addNewEvent={this.props.addNewEvent} 
              setAdding={this.setAdding}
              />
            }
          </tbody>
        </table>
      </div>
    )
  }
}

const EventManager = withEventData(EventIndex);

export default EventManager;