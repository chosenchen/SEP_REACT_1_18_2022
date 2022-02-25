import React from 'react';
import {
  getAllEvents,
  addNewEvent,
  deleteEvent,
  editEvent,
} from '../../services/event.api';
import { EventData } from '../../models/EventData';


export default class WithEventData extends React.Component {
  state = {
    events: [],
  };
  componentDidMount() {
    this.fetchAllEvents();
  }
 
  // API CALL
  fetchAllEvents = () => {
    const { fetchResult, controller } = getAllEvents();
    if (this.controllerList) {
      this.controllerList.push(controller);
    } else {
      this.controllerList = [controller];
    }
    fetchResult.then((data) => {
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
 
  render() {
    return this.props.renderChildren(
      this.state.events,
      this.handleSetEdit,
      this.handleOnChangeEditEvent,
      this.handleAddEvent,
      this.handleUpdateEvent
    );
  }
}
