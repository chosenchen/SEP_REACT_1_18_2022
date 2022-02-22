import React from "react";
import { appApi } from "../../appApi.js";

import Event from ".././Event.js";

import withEventData from ".././HOC/withEventData.js";

import { toUnixDate } from "../.././utils.js";

class UpcomingEvents extends React.Component {
  render() {
    const newEvents = this.props.eventList.filter((event) => {
      if (+toUnixDate(event.startDate) >= Date.now()) {
        return event;
      }
    });

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
            {newEvents?.map((event) => {
              return <Event key={event.id} event={event} upcoming={true} />;
            })}
          </tbody>
        </table>
      </main>
    );
  }
}

const UpcomingEventsWithSubscription = withEventData(UpcomingEvents);

export default UpcomingEventsWithSubscription;
