import React from 'react';
import { API } from '../util/api';
import EventItemIndex from './eventItemRow';
import { upcomingDate } from '../util/date_util';
import {withEventData} from '../HOC/withEventData';

class EventUpcomingIndex extends React.Component{
  render(){
    let {eventList} = this.props;
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

const UpcomingEvent = withEventData(EventUpcomingIndex);

export default UpcomingEvent;