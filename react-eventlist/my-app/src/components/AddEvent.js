import React from "react";

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      startDate: "",
      endDate: "",
    };
    this.input = this.input.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  input(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }
  handleSave(e) {
    this.props.saveChange(
      {
        eventName: this.state.eventName,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
      },
      false
    );
  }
  handleClose() {
    this.props.closeAdd(false);
  }
  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            name="eventName"
            value={this.state.eventName}
            onChange={this.input}
          />
        </td>
        <td>
          <input
            type="date"
            name="startDate"
            value={this.state.startDate}
            onChange={this.input}
          />
        </td>
        <td>
          <input
            type="date"
            name="endDate"
            value={this.state.endDate}
            onChange={this.input}
          />
        </td>
        <td>
          <button className="save" onClick={this.handleSave}>
            SAVE
          </button>
          <button className="close" onClick={this.handleClose}>
            CLOSE
          </button>
        </td>
      </tr>
    );
  }
}
export default AddEvent;
