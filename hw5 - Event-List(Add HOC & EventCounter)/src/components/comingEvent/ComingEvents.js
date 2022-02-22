import React from "react";
// import API from "../../api/Api";
import EventRow from "../eventList/EventRow.js";
import "./ComingEvents.css";
import withEventData from "../HOC/withEventData.js";

class ComingEvents extends React.Component {
  
    render(){     
      const comingEvents = [];
      this.props.eventList.forEach(event => {
        if(+event.startDate >= Date.now()) {
          return comingEvents.push(event);
        }
      });


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
                {comingEvents?.map((event) => {
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

const ComingEventsHeader = withEventData(ComingEvents);
  
export default ComingEventsHeader;