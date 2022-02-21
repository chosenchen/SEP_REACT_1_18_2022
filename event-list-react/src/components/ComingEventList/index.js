import EventListRow from "../EventListRow";

const ComingEventList = ({ eventList }) => {
  let eventListJSX;

  if (eventList.length) {
    eventListJSX = eventList.map((eventItem) => {
      return (
        <EventListRow
          key={eventItem.id}
          eventItem={eventItem}
          hasActions={false}
        />
      );
    });
  } else {
    eventListJSX = <h1>Empty List</h1>;
  }

  return (
    <section className="container">
      <section className="eventlist__app card">
        <div className="eventlist__content">
          <header className="eventlist__header">
            <ul className="eventlist__head">
              <li>Event Name</li>
              <li>Start Date</li>
              <li>End Date</li>
            </ul>
          </header>
          <div className="eventlist__body" id="comingeventlist_container">
            {eventListJSX}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ComingEventList;
