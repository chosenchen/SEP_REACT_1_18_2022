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
  }
  input(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }
  handleSave(e) {
    this.props.saveChange({
      eventName: this.state.eventName,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    });
  }
  // handleClose(){
  //   this.props.close()
  // }
  render() {
    return (
      <tr>
        <td>
          <input type="text" name="eventName" onChange={this.input} />
        </td>
        <td>
          <input type="date" name="startDate" onChange={this.input} />
        </td>
        <td>
          <input type="date" name="endDate" onChange={this.input} />
        </td>
        <td>
          <button type="button" className="save" onClick={this.handleSave}>
            Save
          </button>
          <button type="button" className="close" onClick={this.handleClose}>
            Close
          </button>
        </td>
      </tr>
    );
  }
}
export default AddEvent;
