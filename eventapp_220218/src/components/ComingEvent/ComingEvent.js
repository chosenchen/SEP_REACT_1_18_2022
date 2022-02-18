import React from 'react';
import './ComingEvent.css';
import {
  getAllEvents,
  addNewEvent,
  deleteEvent,
  editEvent,
} from '../../services/event.api';

import { EventData } from '../../models/EventData';

import ComingEventDataRow from '../ComingEventDataRow/ComingEventDataRow';


class CommingEvent extends React.Component {
  state = {
    events: [],
    dataCol: ['Event Name', 'Start Date', 'End Date', ''],
    isShowAddEventRow: false,
  };

  generateEditEventstate = (event) => {
    event.editEvent = new EventData(
      event.eventName,
      event.startDate,
      event.endDate,
      event.id
    );
  };

  fetchAllEvents = () => {
    getAllEvents().then((data) => {
      const events = data.map(({ eventName, startDate, endDate, id }) => {
        const newEvent = new EventData(eventName, startDate, endDate, id);
        this.generateEditEventstate(newEvent);
        return newEvent;
      });

      this.setState({
        events,
      });
    });
  };

  componentDidMount() {
    this.fetchAllEvents();
  }

  

  render() {
    return (
      <section className="event-app">
        <header className="comingevent__header">
          Coming Events
        </header>
        <table className="event-app__table">
          <thead>
            <tr>
              {this.state.dataCol?.map((col) => (
                <th key={`${col}`}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.events?.map((event) =>
             
                <ComingEventDataRow
                  key={event.id}
                  event={event}
                ></ComingEventDataRow>
              
            )}
          </tbody>
        </table>
      </section>
    );
  }
}

export default CommingEvent;
