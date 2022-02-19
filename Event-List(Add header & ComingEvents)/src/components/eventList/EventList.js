import React from "react";

import API from "../../api/Api.js";

import EventRow from "./EventRow.js";

import NewRow from "./NewRow.js";


class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isAdd: false
    };
    // This binding is nessary to make 'this' work in callback
    this.handleAddNew = this.handleAddNew.bind(this);
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

  render(){
    return (
        <div className="container">
          <div className="add-container">
              <button className="add-btn" onClick={this.handleAddNew }>Add New</button>
          </div>
        
          <table className="event-table">
              <thead>
                  <tr className="event-table-header">
                      <th>Event Name</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Actions</th>
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
                      />
                  );
                })}
                {this.state.isAdd && (
                  <NewRow  />
                )}        
              </tbody> 
          </table>
        </div>        
    );
  }
}

export default EventList;