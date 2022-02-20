import React from "react";
import { convertDate, convertToMill } from "../utilities/convertDate";

class EventRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: this.props.eventName,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      id: this.props.id,
      edit: false,
    };
    this.onEdit = this.onEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.update = this.update.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onCancle = this.onCancle.bind(this);
  }
  onEdit() {
    this.setState({ ...this.state, edit: true });
  }
  handleChange(e) {
    if (e.target.name === "eventName") {
      this.setState({ ...this.state, eventName: e.target.value });
    }
    if (e.target.name === "startDate") {
      this.setState({
        ...this.state,
        startDate: convertToMill(e.target.value),
      });
    }
    if (e.target.name === "endDate") {
      this.setState({ ...this.state, endDate: convertToMill(e.target.value) });
    }
  }

  update() {
    this.props.edit(this.state.id, {
      eventName: this.state.eventName,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    });
    this.setState({ ...this.state, edit: false });
  }
  onDelete() {
    this.props.delete(this.state.id);
  }
  onCancle() {
    this.setState({
      eventName: this.props.eventName,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      id: this.props.id,
      edit: false,
    });
  }

  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            name="eventName"
            value={this.state.eventName}
            disabled={!this.state.edit}
            onChange={this.handleChange}
          />
        </td>
        <td>
          <input
            type="date"
            name="startDate"
            value={convertDate(this.state.startDate)}
            disabled={!this.state.edit}
            onChange={this.handleChange}
          />
        </td>
        <td>
          <input
            type="date"
            name="endDate"
            value={convertDate(this.state.endDate)}
            disabled={!this.state.edit}
            onChange={this.handleChange}
          />
        </td>
        <td>
          {this.state.edit ? (
            <div>
              <button type="button" className="edit" onClick={this.update}>
                UPDATE
              </button>
              <button type="button" className="cancle" onClick={this.onCancle}>
                CANCLE
              </button>
            </div>
          ) : (
            <div>
              <button type="button" className="edit" onClick={this.onEdit}>
                EDIT
              </button>
              <button onClick={this.onDelete} type="button" className="delete">
                DELETE
              </button>
            </div>
          )}
        </td>
      </tr>
    );
  }
}
export default EventRow;
