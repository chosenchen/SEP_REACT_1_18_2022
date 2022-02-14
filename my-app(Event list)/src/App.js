import React from "react";

import API from "./Api";

import EventRow from "./components/EventRow.js";

import NewRow from "./components/NewRow.js";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isAdd: false
    };
    // This binding is nessary to make 'this' work in callback
    this.handleAddNew = this.handleAddNew.bind(this);
    this.handleNewRowChange = this.handleNewRowChange.bind(this);
    this.handleEventRowChange = this.handleEventRowChange.bind(this);
  }

  // get data from back end
  componentDidMount() {
    API.getEvents().then(res => {
      this.setState({ events: res });
    });
  }

  handleAddNew() {
    this.setState({ ...this.state, isAdd: true });
  }

  handleNewRowChange(newEevent) {
    if(newEevent === null) {
      API.getEvents().then(res => this.setState({ events: res, isAdd: false }));
    } else {
      API.addEvent(newEevent)
      .then(res => API.getEvents()
      .then(res => {
        this.setState({ events: res, isAdd: false })
      }));
    }
  }

  handleEventRowChange(event, id, btn) {
    if (btn ==='Delete') {
      API.deleteEvent(id);
      API.getEvents().then(res => {
        this.setState({ events: res });
      })
    } else {
      API.updateEvent(id, event)
        .then(() => API.getEvents()
        .then(res => {
          this.setState({ events: res });
        }))
    }
  }

  render(){
    return (
        <div className="container">
          <div className="add-container">
              <button className="add-btn" onClick={this.handleAddNew}>Add New</button>
          </div>
        
          <table className="event-table">
              <thead>
                  <tr className="event-table-header">
                      <th>Event Name</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody className="table-body">
                {this.state.events.map((event) => {
                  return (
                    <EventRow
                      key = {event.id}
                      eventName = {event.eventName}
                      startDate = {event.startDate}
                      endDate = {event.endDate}
                      id = {event.id}
                      onChange = {this.handleEventRowChange}
                      />
                  );
                })}
                {this.state.isAdd && (
                  <NewRow
                    onChange = {this.handleEventRowChange}
                    />
                )}        
              </tbody> 
          </table>
        </div>        
    );
  }
}

export default App;