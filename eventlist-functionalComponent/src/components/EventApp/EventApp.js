import React, { useState } from "react";
import "./EventApp.css";
import { withEventData } from "../../hoc/withEventData";

import { EventData } from "../../models/EventData";

import EventDataRow from "../EventDataRow/EventDataRow";
import EventTable from "../EventTable/EventTable";
import Button from "../Button/Button";

function EventApp(props) {
  const dataCol = ["Event Name", "Start Date", "End Date", "Actions"];
  const [newEvent, setNewEvent] = useState(
    new EventData("", "" + Date.now(), "" + Date.now())
  );
  const [isShowAddEventRow, setShowAddEventRow] = useState(false);

  const hanldeAddEvent = () => {
    setShowAddEventRow(true);
  };

  const hanldeOnChange = (newEvent) => {
    setNewEvent(newEvent);
  };

  const handleCloseAddNew = () => {
    setShowAddEventRow(false);
    setNewEvent(new EventData("", "" + Date.now(), "" + Date.now()));
  };

  const hanldeSaveAddNew = () => {
    const { eventName, startDate, endDate } = newEvent;
    const newEventData = new EventData(eventName, startDate, endDate);
    newEventData.parseTimeStamp();
    if (newEventData.isValidForSave()) {
      props.handleAddEvent(newEventData).then((data) => {
        handleCloseAddNew();
      });
    } else {
      alert("inValid");
    }
  };

  const handleEditSave = (editEventObj) => {
    props.handleUpdateEvent(editEventObj).then((data) => {
      props.handleSetEdit(editEventObj, false);
    });
  };

  const renderHeader = () => (
    <Button onClick={hanldeAddEvent()}>Add Event</Button>
  );
  const renderFooter = () => {
    if (isShowAddEventRow) {
      return (
        <EventDataRow
          event={newEvent}
          actions={[
            {
              actionName: "Save",
              actionFn: hanldeSaveAddNew,
            },
            {
              actionName: "Close",
              actionFn: handleCloseAddNew,
            },
          ]}
          handleOnchange={hanldeOnChange}
        ></EventDataRow>
      );
    } else {
      return null;
    }
  };

  console.log("render Event App");

  const { events, handleOnChangeEditEvent, handleDeleteEvent, handleSetEdit } =
    props;
  return (
    <EventTable
      dataCol={dataCol}
      renderFooter={renderFooter}
      renderHeader={renderHeader}
    >
      {events?.map((event) =>
        event.isEditing ? (
          <EventDataRow
            key={event.id}
            event={event.editEvent}
            actions={[
              {
                actionName: "Save",
                actionFn: handleEditSave,
              },
              {
                actionName: "Cancel",
                actionFn: () => handleSetEdit(event, false),
              },
            ]}
            handleOnchange={handleOnChangeEditEvent}
          ></EventDataRow>
        ) : (
          <EventDataRow
            key={event.id}
            event={event}
            actions={[
              {
                actionName: "Edit",
                actionFn: () => handleSetEdit(event, true),
              },
              {
                actionName: "Delete",
                actionFn: handleDeleteEvent,
              },
            ]}
          ></EventDataRow>
        )
      )}
    </EventTable>
  );
}

const EventManger = withEventData(EventApp);

export default EventManger;
