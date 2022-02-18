import React from "react";
import API from "../api/Api";
import EventRow from "../../EventRow.js";

class ComingEvents extends React.Component {
  
    state = {
      comingEvents: []
    }
  
    async componentDidMount() {
        const eventsData = await API.getEvents();

        const newEvents = [];

        // Choose the event with start date time later than now
        eventsData.forEach(event => {
            if (+event.startDate >= Date.now()) {  
                return newEvents.push(event);
            }
        });

        this.setState({ comingEvents: newEvents });
      }
  
    render(){
      return (
          <div className="comingEvent-container">
              <p className="reminder">All these events are coming soon!</p>

              <table className="coming-event-table">
              <thead>
                  <tr className="event-table-header">
                      <th>Event Name</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                  </tr>
              </thead>
              <tbody className="coming-event-table-body">
                {this.state.comingEvents?.map((event) => {
                  return (
                    <EventRow
                      key = {event.id}
                      eventName = {event.eventName}
                      startDate = {event.startDate}
                      endDate = {event.endDate}
                      coming={true}
                      />
                  );
                })}
              </tbody> 
          </table>
          </div>
        
      )
    }
  }
  
  export default ComingEvents;
