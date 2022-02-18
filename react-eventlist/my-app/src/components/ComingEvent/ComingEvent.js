import react from "react";
import { getAllEvents } from "../../utilities/event.api";
import { convertDate, convertToMill } from "../../utilities/convertDate";

class ComingEvent extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingEvents: [],
      edit: false,
    };
  }

  componentDidMount() {
    getAllEvents().then((data) => {
      const newEvents = data.filter(this.checkDate);
      console.log(newEvents);
      this.setState({ upcomingEvents: newEvents });
    });
  }
  checkDate(event) {
    return +event.startDate >= Date.now();
  }

  render() {
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
          {this.state.upcomingEvents.map((event) => {
            return (
              <tr key={event.id}>
                <td>
                  <input value={event.eventName} disabled={!this.state.edit} />
                </td>
                <td>
                  <input
                    value={convertDate(event.startDate)}
                    disabled={!this.state.edit}
                  />
                </td>
                <td>
                  <input
                    value={convertDate(event.endDate)}
                    disabled={!this.state.edit}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default ComingEvent;
