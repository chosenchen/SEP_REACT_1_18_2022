import React from 'react';
import { appApi } from "../.././appApi.js";
import Event from ".././Event.js";
import NewEvent from ".././NewEvent.js";

import '../.././index.css'

class EventList extends React.Component{
    constructor() {
        super();
        this.state = { events: [], add: false };
        this.handleAddOnClick = this.handleAddOnClick.bind(this);
        this.handleCloseOnClick = this.handleCloseOnClick.bind(this);
    
      }
    
      async componentDidMount() {
        const events = await appApi.getEvents();
        this.setState({ events });
      }
    
      componentDidUpdate(){
    
      }
    
      handleAddOnClick(e) {
        this.setState({ ...this.state, add: true });
      }
    
      handleCloseOnClick(e) {
        if (e.target.name === "new") {
          this.setState({ ...this.state, add: false });
        }
      }
    
      render() {
    
        return (
          <main className="event-list">
            <header className="event-list__header">
              <button
                className="event-list__addBtn"
                onClick={this.handleAddOnClick}
              >
                ADD NEW
              </button>
            </header>
    
            <table className="event-list__table">
              <thead>
                <tr className="event-list__table-row event-list__table-row-header">
                  <th>Event name</th>
                  <th>Start date</th>
                  <th>End date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="event-list__entry-container">
                {this.state.events.map((event, index) => {
                  return (
                    <Event
                      key={index}
                      eventName={event.eventName}
                      startDate={event.startDate}
                      endDate={event.endDate}
                      eventId={event.id}
                      // handleCloseOnClick={this.handleCloseOnClick}
                     
                    />
                  );
                })}
                {this.state.add && (
                  <NewEvent
                    handleCloseOnClick={this.handleCloseOnClick}
                  />
                )}
              </tbody>
            </table>
          </main>
        );
      }
}

export default EventList