import React from "react";
import Event from ".././Event.js";
import NewEvent from ".././NewEvent.js";

import "../.././index.css";

import withEventData from ".././HOC/withEventData.js";

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShowAddEventRow: false,
      newEvent: {
        eventName: "",
        startDate: "",
        endDate: ""
      }
     };

 
  }

  handleAddOnClick = (e) => {
    this.setState({ isShowAddEventRow: true });
  }

  handleCloseOnClick = (e) => {
    if (e.target.name === "new") {
      this.setState({ isShowAddEventRow: false });
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
            {this.props.eventList?.map((event, index) => {
              return (
                <Event
                  key={index}
                  eventName={event.eventName}
                  startDate={event.startDate}
                  endDate={event.endDate}
                  eventId={event.id}
                />
              );
            })}
            {this.state.isShowAddEventRow && (
              <NewEvent handleCloseOnClick={this.handleCloseOnClick} />
            )}
          </tbody>
        </table>
      </main>
    );
  }
}

const EventListWithSubscription = withEventData(EventList);

export default EventListWithSubscription;
