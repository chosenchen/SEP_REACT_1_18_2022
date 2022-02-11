import React from 'react';
import { API } from '../util/api';
import EventItemIndex from './event_item_index';
import AddForm from './add_form';

class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      adding : false ,
      eventList : [] ,
    }

    this.setAdding = this.setAdding.bind(this);
  }

  setAdding(){
    this.setState({adding : !this.state.adding});
  }

  componentDidMount(){
    API.getEvents().then((data) => {
      this.setState({ eventList : data });
    });
  }

  render(){
    const {eventList, adding} = this.state;
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
                editEvent = {API.editEvent}
                deleteEvent = {API.deleteEvent}
                />
              )
            }
            {
              adding && <AddForm getEvent={API.addEvent} setAdding={this.setAdding}/>
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Index;