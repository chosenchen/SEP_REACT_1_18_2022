import react from "react";
import { getAllEvents } from "../../utilities/event.api";
import { convertDate } from "../../utilities/convertDate";
import { withEventData } from "../../HOC/withEventDate";
class ComingEvent extends react.Component {
  // componentDidMount() {
  //   getAllEvents().then((data) => {
  //     const newEvents = data.filter(this.checkDate);
  //     this.setState({ upcomingEvents: newEvents });
  //   });
  // }
  checkDate(event) {
    return +event.startDate >= Date.now();
  }

  render() {
    let { events } = this.props; // get events from HOC
    const newEventList = events.filter(this.checkDate);

    return (
      <table className="event-app__table">
        <thead>
          <tr className="event-app__table__header">
            <th>Event name</th>
            <th>Start data</th>
            <th>End data</th>
          </tr>
        </thead>
        <tbody>
          {newEventList.map((event) => {
            return (
              <tr key={event.id}>
                <td>
                  <input value={event.eventName} disabled />
                </td>
                <td>
                  <input value={convertDate(event.startDate)} disabled />
                </td>
                <td>
                  <input value={convertDate(event.endDate)} disabled />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
const UpcomingEvents = withEventData(ComingEvent);
export default UpcomingEvents;
