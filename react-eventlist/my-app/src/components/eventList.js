import React, { component } from "react";
import { convertDate } from "../utilities/convertDate";
class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          events: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, events } = this.state;
    console.log(DataisLoaded);
    console.log(events);
    const rows = events.map((event) => {
      <tr>
        <td>
          <input
            type="text"
            id={"eventName_" + event.id}
            value={event.eventName}
            disabled
          />
        </td>
        <td>
          <input
            type="date"
            id={"startDate_" + event.id}
            value={convertDate(event.startDate)}
            disabled
          />
        </td>
        <td>
          <input
            type="date"
            id={"endDate_" + event.id}
            value={convertDate(event.endDate)}
            disabled
          />
        </td>
        <td>
          <button type="button" className={"edit_" + event.id}>
            EDIT
          </button>
          <button type="button" className={"delete_" + event.id}>
            DELETE
          </button>
        </td>
      </tr>;
    });
    console.log(rows);

    return (
      <tbody>
        {events.map((event) => {
          <tr>
            <td>
              <input
                type="text"
                id={"eventName_" + event.id}
                value={event.eventName}
                disabled
              />
            </td>
            <td>
              <input
                type="date"
                id={"startDate_" + event.id}
                value={convertDate(event.startDate)}
                disabled
              />
            </td>
            <td>
              <input
                type="date"
                id={"endDate_" + event.id}
                value={convertDate(event.endDate)}
                disabled
              />
            </td>
            <td>
              <button type="button" className={"edit_" + event.id}>
                EDIT
              </button>
              <button type="button" className={"delete_" + event.id}>
                DELETE
              </button>
            </td>
          </tr>;
        })}
      </tbody>
    );
  }
}
export default EventList;
