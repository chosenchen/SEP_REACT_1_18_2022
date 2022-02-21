import React, { useState } from "react";

import EventListRow from "../EventListRow";
import API from "../../api";

const EventList = ({ eventList, setEventList }) => {
  const [isAdd, setIsAdd] = useState(false);

  // Add New Button Event
  const onClickAddNew = (e) => {
    if (!isAdd) {
      setIsAdd(true);
    }
  };

  const onAddNewSuccess = () => {
    setIsAdd(false);
  };

  const onUpdate = (id, newEvent) => {
    if (+id === -1) {
      API.addEvent(newEvent).then((response) => {
        onAddNewSuccess();
        setEventList([...eventList, response]);
      });
    } else {
      API.updateEvent(newEvent, id).then((response) => {
        const updatedEventList = eventList.map((item) => {
          if (+id === item.id) {
            newEvent.id = item.id;
            return newEvent;
          }

          return item;
        });

        setEventList([...updatedEventList]);
      });
    }
  };

  const onDelete = (id) => {
    if (+id === -1) {
      onAddNewSuccess();
    } else {
      API.deleteEvent(id).then((response) => {
        const updatedEventList = eventList.filter((item) => {
          if (+id !== item.id) {
            return true;
          }

          return false;
        });

        setEventList([...updatedEventList]);
      });
    }
  };

  let eventListJSX;

  if (eventList.length) {
    eventListJSX = eventList.map((eventItem) => {
      return (
        <EventListRow
          key={eventItem.id}
          hasActions={true}
          isAdd={false}
          eventItem={eventItem}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      );
    });

    if (isAdd) {
      eventListJSX.push(
        <EventListRow
          key={-1}
          hasActions={true}
          isAdd={true}
          eventItem={{
            eventName: "",
            startDate: "",
            endDate: "",
            id: -1,
          }}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      );
    }
  } else {
    eventListJSX = <h1>Empty List</h1>;
  }

  return (
    <section className="container">
      <section className="eventlist__app card">
        <div className="eventlist__add">
          <button className="btn" onClick={onClickAddNew}>
            Add New
          </button>
        </div>
        <div className="eventlist__content">
          <header className="eventlist__header">
            <ul className="eventlist__head">
              <li>Event Name</li>
              <li>Start Date</li>
              <li>End Date</li>
              <li>Actions</li>
            </ul>
          </header>
          <div className="eventlist__body" id="eventlist_container">
            {eventListJSX}
          </div>
        </div>
      </section>
    </section>
  );
};

export default EventList;
