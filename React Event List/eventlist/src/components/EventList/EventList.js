import React from "react";
import Event from ".././Event.js";
import NewEvent from ".././NewEvent.js";

import "../.././index.css";

import withEventData from ".././HOC/withEventData.js";


class EventList extends React.Component {

  render() {
    return (
      <main className="event-list">
        <header className="event-list__header">
          <button
            className="event-list__addBtn"
            onClick={this.props.handleAddOnClick}
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
                  handleEditInputOnChange={this.props.handleEditInputOnChange}
                  handleEditCloseOnClick={this.props.handleEditCloseOnClick}
                  handleEditSaveOnClick={this.props.handleEditSaveOnClick}
                  isEditing={event.isEditing}
                />
              ) : (
                <Event
                  key={event.id}
                  event={event}
                  handleEditOnClick={this.props.handleEditOnClick}
                  handleDeleteOnClick={this.props.handleDeleteOnClick}
                  isEditing={event.isEditing}
                />
              );
            })}
            {this.props.isShowAddEventRow && (
              <NewEvent
                handleAddCloseOnClick={this.props.handleAddCloseOnClick}
                handleAddInputOnChange={this.props.handleAddInputOnChange}
                handleAddSaveOnClick={this.props.handleAddSaveOnClick}
                event={this.props.newEvent}
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
