import React from 'react';

import Button from '../Button/Button';
import EventList from '../EventList/EventList';
import { withEventData } from '../HOC/withEventData';
import './EventApp.css';


class EventsApp extends React.Component {

  render() {
    console.log(this.props);
    const { hanldeAddEvent, eventListCols, eventList, hanldeEditSave, hanldeCancel, hanldeOnChangeEdit, hanldeEdit, hanldeDelete, hanldeSaveAddNew, handleClose, hanldeOnChange, isShowAddEventRow, newEvent } = this.props;
    return (
      <section className="event-app">           
        <header className="event-app__header">
          <Button onClick={hanldeAddEvent}>Add Event</Button>
        </header>
        <EventList dataCol={eventListCols}
          events={eventList}
          hanldeEditSave={hanldeEditSave}
          hanldeCancel={hanldeCancel}
          hanldeOnChangeEdit={hanldeOnChangeEdit}
          hanldeEdit={hanldeEdit}
          hanldeDelete={hanldeDelete}
          hanldeSaveAddNew={hanldeSaveAddNew}
          handleClose={handleClose}
          hanldeOnChange={hanldeOnChange}
          isShowAddEventRow={isShowAddEventRow}
          newEvent={newEvent}
        />
      </section>
    );
  }
}

const EventApp = withEventData(EventsApp);

export default EventApp;
