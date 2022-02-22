import React from "react";

export default class Event extends React.Component {


  render() {
    return (
      <tr className="event-list__table-row">
        <td>
          <input
            type="text"
            name="eventName"
            onChange={
              this.props.handleEditInputOnChange
                ? (e) => {
                    this.props.handleEditInputOnChange(e, this.props.event.id);
                  }
                : () => {}
            }
            value={this.props.event.eventName}
            disabled={this.props.handleEditInputOnChange ? false : true}
          />
        </td>
        <td>
          <input
            type="date"
            name="startDate"
            onChange={
              this.props.handleEditInputOnChange
                ? (e) => {
                    this.props.handleEditInputOnChange(e, this.props.event.id);
                  }
                : () => {}
            }
            value={this.props.event.startDate}
            disabled={this.props.handleEditInputOnChange ? false : true}
          />
        </td>
        <td>
          <input
            type="date"
            name="endDate"
            onChange={
              this.props.handleEditInputOnChange
                ? (e) => {
                    this.props.handleEditInputOnChange(e, this.props.event.id);
                  }
                : () => {}
            }
            value={this.props.event.endDate}
            disabled={this.props.handleEditInputOnChange ? false : true}
          />
        </td>
        {!this.props.upcoming ? (
          <td>
            {this.props.isEditing ? (
              <div>
                <button onClick={()=>{this.props.handleEditSaveOnClick(this.props.event)}}>SAVE</button>
                <button
                  onClick={() => {
                    this.props.handleEditCloseOnClick(this.props.event.id);
                  }}
                >
                  CLOSE
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => {
                    this.props.handleEditOnClick(this.props.event.id);
                  }}
                >
                  EDIT
                </button>
                <button
                  onClick={() => {
                    this.props.handleDeleteOnClick(this.props.event.id);
                  }}
                >
                  DELETE
                </button>
              </div>
            )}
          </td>
        ) : (
          <></>
        )}
      </tr>
    );
  }
}
