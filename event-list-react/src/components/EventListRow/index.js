import React from "react";

import { timestampToStr, dateStrToTimestamp } from "../../util/timestamp";

class EventListRow extends React.Component {
  state = {
    isUpdate: false,
    eventName: "",
    startDate: "",
    endDate: "",
  };

  componentDidMount() {
    const _eventItem = this.props.eventItem;
    this.setState({
      eventName: _eventItem.eventName,
      startDate: _eventItem.startDate,
      endDate: _eventItem.endDate,
    });
  }

  onEventName = (e) => {
    this.setState({ eventName: e.target.value });
  };

  onStartDate = (e) => {
    this.setState({ startDate: e.target.value });
  };

  onEndDate = (e) => {
    this.setState({ endDate: e.target.value });
  };

  onUpdate = () => {
    if (!this.state.isUpdate) {
      this.setState({ isUpdate: true });
    } else {
      this.props.onUpdate(this.props.eventItem.id, {
        eventName: this.state.eventName,
        startDate: dateStrToTimestamp(this.state.startDate),
        endDate: dateStrToTimestamp(this.state.endDate),
      });

      this.setState({ isUpdate: false });
    }
  };

  onDelete = () => {
    if (this.state.isUpdate) {
      this.setState({ isUpdate: false });
    } else {
      this.props.onDelete(this.props.eventItem.id);
    }
  };

  render() {
    let eventItemJSX;

    eventItemJSX = (
      <div className="eventlist__row">
        <div className="eventlist__item">
          <input
            type="text"
            value={this.state.eventName}
            disabled={!this.state.isUpdate && !this.props.isAdd}
            onChange={this.onEventName}
          />
        </div>
        <div className="eventlist__item">
          <input
            type={!this.state.isUpdate && !this.props.isAdd ? "text" : "date"}
            value={this.state.endDate && timestampToStr(this.state.startDate)}
            disabled={!this.state.isUpdate && !this.props.isAdd}
            onChange={this.onStartDate}
          />
        </div>
        <div className="eventlist__item">
          <input
            type={!this.state.isUpdate && !this.props.isAdd ? "text" : "date"}
            value={this.state.endDate && timestampToStr(this.state.endDate)}
            disabled={!this.state.isUpdate && !this.props.isAdd}
            onChange={this.onEndDate}
          />
        </div>
        <div className="eventlist__actions">
          <input
            type="button"
            value={this.state.isUpdate ? "UPDATE" : "EDIT"}
            onClick={this.onUpdate}
          />
          <input
            type="button"
            value={this.state.isUpdate ? "CANCEL" : "DEL"}
            onClick={this.onDelete}
          />
        </div>
      </div>
    );

    return <>{eventItemJSX}</>;
  }
}

export default EventListRow;
