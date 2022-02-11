import React from "react";

import {fromUnixDate, toUnixDate} from ".././utils.js"

import {appApi} from ".././appApi.js"


export default class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: props.eventName,
      startDate: fromUnixDate(props.startDate),
      endDate: fromUnixDate(props.endDate),
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

  handleEditOnClick(){
      this.setState({...this.state, edit: true})
  }

  handleCloseOnClick(){
    this.setState({...this.state, edit: false})
  }

  handleDeleteOnClick(){
    appApi.deleteEvent(this.state.eventId)
    window.location.reload()
  }

  handleSaveOnClick() {
    const event = {
      eventName: this.state.eventName,
      startDate: toUnixDate(this.state.startDate),
      endDate: toUnixDate(this.state.endDate),
      id: this.state.eventId
    };
    appApi.updateEvent(event);
    window.location.reload()
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
            disabled = {!this.state.edit}
          />
        </td>
        <td>
          <input
            type="date"
            name="startDate"
            onChange={this.handleInputOnChange}
            value={this.state.startDate}
            disabled = {!this.state.edit}
          />
        </td>
        <td>
          <input
            type="date"
            name="endDate"
            onChange={this.handleInputOnChange}
            value={this.state.endDate}
            disabled = {!this.state.edit}
          />
        </td>
        <td>
          {this.state.edit ? (
            <div>
              <button onClick={this.handleSaveOnClick}>SAVE</button>
              <button name="not new" onClick={this.handleCloseOnClick}>CLOSE</button>
            </div>
          ) : (
            <div>
              <button onClick={this.handleEditOnClick}>EDIT</button>
              <button onClick={this.handleDeleteOnClick}>DELETE</button>
            </div>
          )}
        </td>
      </tr>
    );
  }
}
