import React, { useState } from "react";

import EventList from "./components/EventList";

import "./App.css";

const App = () => {
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
            <EventList isAdd={isAdd} onAddNewSuccess={onAddNewSuccess} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default App;
