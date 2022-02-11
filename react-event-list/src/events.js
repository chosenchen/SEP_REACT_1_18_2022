import React from 'react';
import $ from 'jquery'
import events from './db.json'
import API from './API'
import EventRow from './EventRow';

events = events.events;

events.forEach(ele => {
  ele.startDate = new Date(+ele.startDate);
  ele.endDate = new Date(+ele.endDate);
  ele.startDate = ele.startDate.getFullYear() + '-' + (ele.startDate.getMonth() + 1) + '-' + (ele.startDate.getDate() + 1);
  ele.endDate = ele.endDate.getFullYear() + '-' + (ele.endDate.getMonth() + 1) + '-' + (ele.endDate.getDate() + 1);
  ele.startDate = ele.startDate.split(/\D/).slice(0, 3).map(num => num.padStart(2, "0")).join("-");
  ele.endDate = ele.endDate.split(/\D/).slice(0, 3).map(num => num.padStart(2, "0")).join("-");
});



class EventList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ...props, events: [] }
    this.createRow = this.createRow.bind(this);
  }

  getEventList() {
    const events = API.getEvents();
    this.setState({ events: events });
  }

  createRow() {
    return this.state.events.map(event => {
      <EventRow event={event} key={event.id}/>
    })
  }
  
  render() {
    return (
      <EventRow />
    )
  }
}

export default EventList;