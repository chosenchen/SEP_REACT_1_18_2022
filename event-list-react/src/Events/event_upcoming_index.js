import React from 'react';
import { API } from '../util/api';
import EventItemIndex from './event_item_index';
import { upcomingDate } from '../util/date_util';

class EventIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      eventList : [] ,
    }
  }

  componentDidMount(){
    API.getEvents().then((data) => {
      this.setState({ eventList : data });
    });
  }

  render(){
    let {eventList} = this.state;
    eventList = eventList.filter((day) => upcomingDate(day.startDate));
    return (
      <div>
        <table>
          <thead>
            <tr className='upcoming-header-container'>
              <th className='col-header'>Event name</th>
              <th className='col-header'>Start date</th>
              <th className='col-header'>End date</th>
            </tr>
          </thead>
          <tbody id='eventlist-container'>
            {
              eventList && eventList.map(event => 
                <EventItemIndex 
                key={`event-${event.id}`} 
                event={event}
                getEvents={API.getEvents}
                editEvent = {API.editEvent}
                deleteEvent = {API.deleteEvent}
                setList={this.setList}
                eventUpcoming={this.props.eventUpcoming}
                />
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default EventIndex;