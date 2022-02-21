import React from 'react';
import './EventApp.css';
import Button from '../Button/Button';
import EventList from '../EventList/EventList';

class EventApp extends React.Component {

  render() {
    const { hanldeAddEvent, dataCol, events, hanldeEditSave, hanldeCancel, hanldeOnChangeEdit, hanldeEdit, hanldeDelete, hanldeSaveAddNew, handleClose, hanldeOnChange, isShowAddEventRow, newEvent } = this.props;
    return (
      <section className="event-app">
        <header className="event-app__header">
          <Button onClick={hanldeAddEvent}>Add Event</Button>
        </header>
        <EventList dataCol={dataCol}
          events={events}
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

export default EventApp;
