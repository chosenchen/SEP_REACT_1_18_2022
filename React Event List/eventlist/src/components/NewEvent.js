import React from "react";

import { appApi } from ".././appApi.js";
import { toUnixDate } from ".././utils.js";

export default class NewEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      eventName: "",
      startDate: "",
      endDate: "",
    };
    this.handleInputOnChange = this.handleInputOnChange.bind(this);
    this.handleSaveOnClick = this.handleSaveOnClick.bind(this);
  }

  handleInputOnChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  handleSaveOnClick() {
    const event = {
      eventName: this.state.eventName,
      startDate: toUnixDate(this.state.startDate),
      endDate: toUnixDate(this.state.endDate),
    };

    if (
      this.state.eventName === "" ||
      this.state.startDate === "" ||
      this.state.endDate === ""
    ) {
      alert("input all the required fields");
    } else{
      
      appApi.saveEvent(event);
      window.location.reload();
    }
      

    
  }

  render() {
    return (
      <tr className="event-list__table-row event-list__table-row_add">
        <td>
          <input
            className="new-event-name"
            type="text"
            name="eventName"
            onChange={this.handleInputOnChange}
            value={this.state.eventName}
          />
        </td>
        <td>
          <input
            className="new-event-start-date"
            type="date"
            name="startDate"
            onChange={this.handleInputOnChange}
            value={this.state.startDate}
          />
        </td>
        <td>
          <input
            className="new-event-end-date"
            type="date"
            name="endDate"
            onChange={this.handleInputOnChange}
            value={this.state.endDate}
          />
        </td>
        <td>
          <div>
            <button
              className="event-list__btn_save"
              onClick={this.handleSaveOnClick}
            >
              SAVE
            </button>
            <button
              className="event-list__btn_close"
              onClick={this.props.handleCloseOnClick}
              name="new"
            >
              CLOSE
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
