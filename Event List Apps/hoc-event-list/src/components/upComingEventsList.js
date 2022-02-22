import React from "react";

import Event from '../components/event.js';

import withEventList from '.././HOC/withEventList.js';

class UpcomingEventList extends React.Component {
  render() {
    const { eventList } = this.props;
    const newEvents = eventList.filter((event)=>{
      if(+event.startDate >= Date.now()){
        return event;
      }
    })

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

const EventListCounterHOC = withEventList(UpcomingEventList);

export default EventListCounterHOC;