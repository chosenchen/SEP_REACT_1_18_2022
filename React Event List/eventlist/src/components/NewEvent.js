import React from "react";



export default class NewEvent extends React.Component {


  render() {
    return (
      <tr className="event-list__table-row event-list__table-row_add">
        <td>
          <input
            className="new-event-name"
            type="text"
            name="eventName"
            onChange={this.props.handleAddInputOnChange}
            value={this.props.event.eventName}
          />
        </td>
        <td>
          <input
            className="new-event-start-date"
            type="date"
            name="startDate"
            onChange={this.props.handleAddInputOnChange}
            value={this.props.event.startDate}
          />
        </td>
        <td>
          <input
            className="new-event-end-date"
            type="date"
            name="endDate"
            onChange={this.props.handleAddInputOnChange}
            value={this.props.event.endDate}
          />
        </td>
        <td>
          <div>
            <button
              className="event-list__btn_save"
              onClick={this.props.handleAddSaveOnClick}
            >
              SAVE
            </button>
            <button
              className="event-list__btn_close"
              onClick={this.props.handleAddCloseOnClick}
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
