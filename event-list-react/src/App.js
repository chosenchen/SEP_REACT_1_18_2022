import React from "react";

import EventList from "./components/EventList";

import "./App.css";

class App extends React.Component {
  state = {
    isAdd: false,
  };

  // Add New Button Event
  onClickAddNew = (e) => {
    this.setState({ isAdd: true });
  };

  render() {
    return (
      <section className="container">
        <section className="eventlist__app card">
          <div className="eventlist__add">
            <button className="btn" onClick={this.onClickAddNew}>
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
              <EventList isAdd={this.state.isAdd} />
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default App;
