import React from "react";
import AddEvent from "./AddEvent";
import EventRow from "./EventRow";
import "./EventTable.css";
import {
  getAllEvents,
  addEvent,
  deleteEvent,
  updateEvent,
} from "../utilities/event.api";
//import { withEventData } from "../HOC/withEventDate";

class EventTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      DataisLoaded: false,
      addNew: false,
      update: false,
      cancle: false,
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  componentDidMount() {
    getAllEvents().then((data) => {
      this.setState({ ...this.state, events: data, DataisLoaded: true });
    });
  }
  handleAdd() {
    this.setState({ ...this.state, addNew: true });
  }
  handleSave = (newEvent, saved) => {
    addEvent(newEvent).then((data) => {
      getAllEvents().then((data) => {
        this.setState({ events: data, DataisLoaded: true, addNew: saved });
      });
    });
  };
  handleCloseAdd = (b) => {
    this.setState({ ...this.state, addNew: b });
  };
  handleUpdate = (id, event) => {
    updateEvent(event, id).then((data) => {
      // getAllEvents().then((data) => {
      //   this.setState({
      //     ...this.state,
      //     events: data,
      //     DataisLoaded: true,
      //   });
      // });
    });
  };
  handleDelete = (id) => {
    deleteEvent(id).then((data) => {
      getAllEvents().then((data) => {
        this.setState({ ...this.state, events: data, DataisLoaded: true });
      });
    });
  };

  render() {
    return (
      <table className="event-app__table">
        <thead>
          <tr>
            <td>
              <button
                type="button"
                className="add__new"
                onClick={this.handleAdd}
              >
                ADD NEW
              </button>
            </td>
          </tr>
          <tr className="event-app__table__header">
            <th>Event name</th>
            <th>Start data</th>
            <th>End data</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.events?.map((event) => {
            return (
              <EventRow
                key={event.id}
                eventName={event.eventName}
                startDate={event.startDate}
                endDate={event.endDate}
                id={event.id}
                update={this.handleUpdate}
                delete={this.handleDelete}
              />
            );
          })}
          {this.state.addNew && (
            <AddEvent
              saveChange={this.handleSave}
              closeAdd={this.handleCloseAdd}
            />
          )}
        </tbody>
      </table>
    );
  }
}
//const EventManager = withEventData(EventTable);
export default EventTable;
