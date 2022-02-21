import React, { useState } from "react";

import { timestampToStr, dateStrToTimestamp } from "../../util/timestamp";

const EventListRow = ({ isAdd, eventItem, hasActions, onUpdate, onDelete }) => {
  const [isUpdate, setIsUpdate] = useState(false);

  const [eventName, setEventName] = useState(eventItem.eventName);
  const [startDate, setStartDate] = useState(eventItem.startDate);
  const [endDate, setEndDate] = useState(eventItem.endDate);

  const onEventName = (e) => {
    setEventName(e.target.value);
  };

  const onStartDate = (e) => {
    setStartDate(dateStrToTimestamp(e.target.value));
  };

  const onEndDate = (e) => {
    setEndDate(dateStrToTimestamp(e.target.value));
  };

  const onHandleUpdate = () => {
    if (isAdd) {
      onUpdate(eventItem.id, {
        eventName: eventName,
        startDate: `${dateStrToTimestamp(startDate)}`,
        endDate: `${dateStrToTimestamp(endDate)}`,
      });
    } else if (!isUpdate) {
      setIsUpdate(true);
    } else {
      onUpdate(eventItem.id, {
        eventName: eventName,
        startDate: `${dateStrToTimestamp(startDate)}`,
        endDate: `${dateStrToTimestamp(endDate)}`,
      });

      setIsUpdate(false);
    }
  };

  const onHandleDelete = () => {
    if (isUpdate) {
      setIsUpdate(false);
      setEventName(eventItem.eventName);
      setStartDate(eventItem.startDate);
      setEndDate(eventItem.endDate);
    } else {
      onDelete(eventItem.id);
    }
  };

  let eventItemJSX;

  eventItemJSX = (
    <div className="eventlist__row">
      <div className="eventlist__item">
        <input
          type="text"
          value={eventName}
          disabled={!isUpdate && !isAdd}
          onChange={onEventName}
        />
      </div>
      <div className="eventlist__item">
        <input
          type={!isUpdate && !isAdd ? "text" : "date"}
          value={startDate && timestampToStr(startDate)}
          disabled={!isUpdate && !isAdd}
          onChange={onStartDate}
        />
      </div>
      <div className="eventlist__item">
        <input
          type={!isUpdate && !isAdd ? "text" : "date"}
          value={endDate && timestampToStr(endDate)}
          disabled={!isUpdate && !isAdd}
          onChange={onEndDate}
        />
      </div>
      {hasActions ? (
        <div className="eventlist__actions">
          <input
            type="button"
            value={isUpdate || isAdd ? "UPDATE" : "EDIT"}
            onClick={onHandleUpdate}
          />
          <input
            type="button"
            value={isUpdate ? "CANCEL" : "DEL"}
            onClick={onHandleDelete}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );

  return <>{eventItemJSX}</>;
};

export default EventListRow;
