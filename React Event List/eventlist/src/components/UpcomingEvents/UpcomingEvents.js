import React from "react";
import { appApi } from "../../appApi.js";

import Event from ".././Event.js";

class UpcomingEvents extends React.Component {
  state = {
    upcomingEvents: [],
  };

  async componentDidMount() {
    const events = await appApi.getEvents();


    const newEvents = [];

    events.forEach((event) => {
      if (+event.startDate >= Date.now()) {

        return newEvents.push(event);
      }
    });

    this.setState({ upcomingEvents: newEvents });
  }

  render() {
    return (
      <main className="event-list upcoming-events">
        <header className="event-list__header">
          <h2>Upcoming Events</h2>
        </header>

        <table className="event-list__table">
          <thead>
            <tr className="event-list__table-row event-list__table-row-header">
              <th>Event name</th>
              <th>Start date</th>
              <th>End date</th>
            </tr>
          </thead>

          <tbody className="event-list__entry-container">
            {this.state.upcomingEvents?.map((event) => {
              return (
                <Event
                  key={event.id}
                  eventName={event.eventName}
                  startDate={event.startDate}
                  endDate={event.endDate}
                  eventId={event.id}
                  upcoming={true}
                />
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}

export default UpcomingEvents;
