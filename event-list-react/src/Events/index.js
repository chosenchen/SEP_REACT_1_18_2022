import React from 'react';
import { API } from '../util/api';
import EventItemIndex from './event_item_index';

class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      adding : false ,
      eventList : [] ,
    }
  }

  componentDidMount(){
    API.getEvents().then((data) => {
      this.setState({ eventList : data });
    });
  }

  render(){
    const {eventList} = this.state;
    return (
      <div>
        <div className='add-new-btn-container'>
          <button className='add-new-btn'>ADD NEW</button>
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
                <EventItemIndex key={`event-${event.id}`} event={event}  />
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Index;