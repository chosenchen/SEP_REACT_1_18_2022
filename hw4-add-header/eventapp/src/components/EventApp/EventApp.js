import React from 'react';
import './EventApp.css';
import {
  getAllEvents,
  addNewEvent,
  deleteEvent,
  editEvent,
} from '../../services/event.api';

import { EventData } from '../../models/EventData';
// import EventEditRow from '../EventEditRow/EventEditRow';
// import EventRow from '../EventRow/EventRow';
// import EventAddRow from '../EventAddRow/EventAddRow';
import EventDataRow from '../EventDataRow/EventDataRow';
import Button from '../Button/Button';
import EventList from '../EventList/EventList';

class EventApp extends React.Component {
  state = {
    events: [],
    dataCol: ['Event Name', 'Start Date', 'End Date', 'Actions'],
    isShowAddEventRow: false,
    newEvent: new EventData('', '' + Date.now(), '' + Date.now()),
  };

  generateEditEventstate = (event) => {
    event.isEditing = false;
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

  hanldeAddEvent = () => {
    this.setState({
      isShowAddEventRow: true,
    });
  };
  hanldeOnChange = ({ target: { name, value } }) => {
    this.setState({
      newEvent: {
        ...this.state.newEvent,
        [name]: value,
      },
    });
  };

  hanldeDelete = (id) => {
    deleteEvent(id)
      .then(() => {
        this.fetchAllEvents();
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  handleClose = () => {
    this.setState({
      isShowAddEventRow: false,
      newEvent: new EventData('', '' + Date.now(), '' + Date.now()),
    });
  };

  hanldeSaveAddNew = () => {
    const { eventName, startDate, endDate } = this.state.newEvent;
    const newEvent = new EventData(eventName, startDate, endDate);
    newEvent.parseTimeStamp();
    if (newEvent.isValidForSave()) {
      addNewEvent(newEvent).then((data) => {
        //this.setState({ events: [data, ...this.state.events] });
        this.fetchAllEvents();
      });
      this.handleClose();
    } else {
      alert('inValid');
    }
  };
  hanldeEdit = ({ id }) => {
    this.setState({
      events: this.state.events.map((event) => {
        if (event.id === id) {
          return { ...event, isEditing: true };
        } else {
          return event;
        }
      }),
    });
  };

  hanldeOnChangeEdit = ({ target: { name, value } }, { id }) => {
    this.setState({
      events: this.state.events.map((event) => {
        if (event.id === id) {
          return { ...event, editEvent: { ...event.editEvent, [name]: value } };
        } else {
          return event;
        }
      }),
    });
  };

  hanldeCancel = (id) => {
    this.setState({
      events: this.state.events.map((event) => {
        if (event.id === id) {
          return { ...event, isEditing: false };
        } else {
          return event;
        }
      }),
    });
  };
  hanldeEditSave = (editEventObj) => {
    editEvent(editEventObj).then((data) => {
      this.setState({
        events: this.state.events.map((event) => {
          if (event.id === editEventObj.id) {
            return {
              ...editEventObj,
              isEditing: false,
            };
          } else {
            return event;
          }
        }),
      });
    });
  };

  render() {
    return (
      <section className="event-app">
        <header className="event-app__header">
          <Button onClick={this.hanldeAddEvent}>Add Event</Button>
        </header>
        <EventList dataCol={this.state.dataCol}
          events={this.state.events}
          hanldeEditSave={this.hanldeEditSave}
          hanldeCancel={this.hanldeCancel}
          hanldeOnChangeEdit={this.hanldeOnChangeEdit}
          hanldeEdit={this.hanldeEdit}
          hanldeDelete={this.hanldeDelete}
          hanldeSaveAddNew={this.hanldeSaveAddNew}
          handleClose={this.handleClose}
          hanldeOnChange={this.hanldeOnChange}
          isShowAddEventRow={this.state.isShowAddEventRow}
          newEvent={this.state.newEvent}
        />
      </section>
    );
  }
}

export default EventApp;
