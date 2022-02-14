import React from "react";
import { convertDate, convertToUnix } from "../utilities/convertDate";
import AddEvent from "./AddEvent";

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      DataisLoaded: false,
      saved: false,
    };
  }
  componentDidMount() {
    this.getEvents();
  }
  getEvents() {
    return fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          events: json,
          DataisLoaded: true,
        });
      });
  }
  editEvent = (id) => {
    fetch("http://localhost:3000/events/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        eventName: "TEST-CHANGED",
        startDate: "1641790800000",
        endDate: "1641790800000",
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  deleteEvent = (id) => {
    fetch("http://localhost:3000/events/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.getEvents();
      });
  };
  handleSave = (newEvent) => {
    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        eventName: newEvent.eventName,
        startDate: convertToUnix(newEvent.startDate),
        endDate: convertToUnix(newEvent.endDate),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.getEvents();
        this.setState({ saved: true });
      });
  };

  render() {
    let add = this.props.addRow;
    return (
      <tbody>
        {this.state.events.map((event) => (
          <tr key={event.id}>
            <td>
              <input
                type="text"
                id={"eventName_" + event.id}
                value={event.eventName}
                disabled
                onChange={this.handleChange}
              />
            </td>
            <td>
              <input
                type="date"
                id={"startDate_" + event.id}
                value={convertDate(event.startDate)}
                disabled
                onChange={this.handleChange}
              />
            </td>
            <td>
              <input
                type="date"
                id={"endDate_" + event.id}
                value={convertDate(event.endDate)}
                disabled
                onChange={this.handleChange}
              />
            </td>
            <td>
              <button type="button" className={"edit_" + event.id}>
                EDIT
              </button>
              <button
                onClick={() => this.deleteEvent(event.id)}
                type="button"
                className={"delete_" + event.id}
              >
                DELETE
              </button>
            </td>
          </tr>
        ))}
        {add && !this.state.saved && (
          <AddEvent saveChange={this.handleSave}></AddEvent>
        )}
      </tbody>
    );
  }
}
export default EventList;
