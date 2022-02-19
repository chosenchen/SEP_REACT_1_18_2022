import React from "react";
import API from "../../api/Api";
import EventRow from "../eventList/EventRow.js";
import "./ComingEvents.css";

class ComingEvents extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comingEvents: [],
      }
    }
    // state = {
    //   comingEvents: []
    // };

    // componentDidMount() {
    //   API.getEvents().then(res => {
    //     this.setState({ events: res });
    //   });
    // }
  
    async componentDidMount() {
        const eventsData = await API.getEvents();

        const newEvents = [];

        // Choose the event with start time later than now
        eventsData.forEach(event => {
            if (+event.startDate >= Date.now()) {  
                return newEvents.push(event);
            }
        });

        this.setState({ comingEvents: newEvents });
      }
  
    render(){
      return (
          <div className="coming-event-container">  
            <h3>All these events will come later!</h3> 
            <hr></hr>        
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
                      isComing = {true}
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