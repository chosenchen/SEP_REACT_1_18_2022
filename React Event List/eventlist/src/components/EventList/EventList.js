import React from "react";
import Event from ".././Event.js";
import NewEvent from ".././NewEvent.js";

import "../.././index.css";

import withEventData from ".././HOC/withEventData.js";
import { toUnixDate } from "../.././utils.js";
import { appApi } from "../.././appApi.js";

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowAddEventRow: false,
      newEvent: {
        eventName: "",
        startDate: "",
        endDate: "",
      },
    };
  }

  handleAddOnClick = (e) => {
    this.setState({ isShowAddEventRow: true });
  };

  handleDeleteOnClick = async (id) => {
    await appApi.deleteEvent(id);
    this.props.fetchAllEvents();
  };

  handleAddInputOnChange = (e) => {
    this.setState({
      newEvent: {
        ...this.state.newEvent,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleAddCloseOnClick = () => {
    this.setState({
      isShowAddEventRow: false,
      newEvent: {
        eventName: "",
        startDate: "",
        endDate: "",
      },
    });
  };

  handleAddSaveOnClick = async () => {
    const event = {
      eventName: this.state.newEvent.eventName,
      startDate: toUnixDate(this.state.newEvent.startDate),
      endDate: toUnixDate(this.state.newEvent.endDate),
    };

    if (
      this.state.newEvent.eventName === "" ||
      this.state.newEvent.startDate === "" ||
      this.state.newEvent.endDate === ""
    ) {
      alert("input all the required fields");
    } else {
      await appApi.saveEvent(event);
      this.props.fetchAllEvents();
      this.handleAddCloseOnClick();
    }
  };

  handleEditOnClick = (id) => {
    this.props.updateEventList(id, true);
  };

  handleEditCloseOnClick = (id) => {
    this.props.updateEventList(id, false);
  };

  handleEditInputOnChange = (e, id) => {
    this.props.updateEventList(id, true, e);
  };

  handleEditSaveOnClick=async(newEvent)=> {
    const event = {
      eventName: newEvent.eventName,
      startDate: toUnixDate(newEvent.startDate),
      endDate: toUnixDate(newEvent.endDate),
      id: newEvent.id
    };

    if (
      this.state.eventName === "" ||
      this.state.startDate === "" ||
      this.state.endDate === ""
    ) {
      alert("input all the required fields");
    } else {
      await appApi.updateEvent(event);
      this.props.fetchAllEvents();
      
    }
  }

  render() {
    return (
      <main className="event-list">
        <header className="event-list__header">
          <button
            className="event-list__addBtn"
            onClick={this.handleAddOnClick}
          >
            ADD NEW
          </button>
        </header>

        <table className="event-list__table">
          <thead>
            <tr className="event-list__table-row event-list__table-row-header">
              <th>Event name</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="event-list__entry-container">
            {this.props.eventList?.map((event) => {
              return event.isEditing ? (
                <Event
                  key={event.id}
                  event={event.editEvent}
                  handleEditInputOnChange={this.handleEditInputOnChange}
                  handleEditCloseOnClick={this.handleEditCloseOnClick}
                  handleEditSaveOnClick={this.handleEditSaveOnClick}
                  isEditing={event.isEditing}
                />
              ) : (
                <Event
                  key={event.id}
                  event={event}
                  handleEditOnClick={this.handleEditOnClick}
                  handleDeleteOnClick={this.handleDeleteOnClick}
                  isEditing={event.isEditing}
                />
              );
            })}
            {this.state.isShowAddEventRow && (
              <NewEvent
                handleAddCloseOnClick={this.handleAddCloseOnClick}
                handleAddInputOnChange={this.handleAddInputOnChange}
                handleAddSaveOnClick={this.handleAddSaveOnClick}
                event={this.state.newEvent}
              />
            )}
          </tbody>
        </table>
      </main>
    );
  }
}

const EventListWithSubscription = withEventData(EventList);

export default EventListWithSubscription;
