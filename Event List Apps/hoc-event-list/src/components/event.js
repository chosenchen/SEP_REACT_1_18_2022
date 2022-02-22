import React from "react";

import { convertToDate , convertToUnix } from '../utils/format-date';

import { API } from '../services/db';



export default class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: props.eventName,
      startDate: convertToDate(props.startDate),
      endDate: convertToDate(props.endDate),
      eventId: props.eventId,
      edit: false,
    };
    this.handleInputOnChange = this.handleInputOnChange.bind(this);
    this.handleEditOnClick = this.handleEditOnClick.bind(this);
    this.handleCloseOnClick = this.handleCloseOnClick.bind(this);
    this.handleDeleteOnClick = this.handleDeleteOnClick.bind(this);
    this.handleSaveOnClick = this.handleSaveOnClick.bind(this);
  }

  handleInputOnChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  handleEditOnClick() {
    this.setState({ ...this.state, edit: true });
  }

  handleCloseOnClick() {
    this.setState({ ...this.state, edit: false });
  }

  handleDeleteOnClick() {
    API.deleteEvent(this.state.eventId);
    window.location.reload();
  }

  handleSaveOnClick() {
    const event = {
      eventName: this.state.eventName,
      startDate: convertToUnix(this.state.startDate),
      endDate: convertToUnix(this.state.endDate),
      id: this.state.eventId,
    };

    if (
      this.state.eventName === "" ||
      this.state.startDate === "" ||
      this.state.endDate === ""
    ) {
      alert("input all the required fields");
    } else {
      API.editEvent(event);
    }
  }

  render() {
    return (
      <tr className="event-list__table-row">
        <td>
          <input
            type="text"
            name="eventName"
            onChange={this.handleInputOnChange}
            value={this.state.eventName}
            disabled={!this.state.edit}
          />
        </td>
        <td>
          <input
            type="date"
            name="startDate"
            onChange={this.handleInputOnChange}
            value={this.state.startDate}
            disabled={!this.state.edit}
          />
        </td>
        <td>
          <input
            type="date"
            name="endDate"
            onChange={this.handleInputOnChange}
            value={this.state.endDate}
            disabled={!this.state.edit}
          />
        </td>
        {!this.props.upcoming? (<td>
          {this.state.edit ? (
            <div>
              <button onClick={this.handleSaveOnClick}>SAVE</button>
              <button name="not new" onClick={this.handleCloseOnClick}>
                CLOSE
              </button>
            </div>
          ) : (
            <div>
              <button onClick={this.handleEditOnClick}>EDIT</button>
              <button onClick={this.handleDeleteOnClick}>DELETE</button>
            </div>
          )}
        </td>):<></> }
       
      </tr>
    );
  }
}