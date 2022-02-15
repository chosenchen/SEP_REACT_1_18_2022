import React, { useEffect, useState } from "react";

import EventListRow from "../EventListRow";
import API from "../../api";

const EventList = ({ isAdd, onAddNewSuccess }) => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    API.getEventList().then((eventList) => {
      setEventList(eventList);
    });
  }, []);

  const onUpdate = (id, newEvent) => {
    if (+id === -1) {
      API.addEvent(newEvent).then((response) => {
        setEventList([...eventList, response]);

        onAddNewSuccess();
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

  const _eventList = eventList;

  let eventListJSX;

  if (_eventList.length) {
    eventListJSX = _eventList.map((eventItem) => {
      return (
        <EventListRow
          key={eventItem.id}
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
  return <>{eventListJSX}</>;
};

export default EventList;
