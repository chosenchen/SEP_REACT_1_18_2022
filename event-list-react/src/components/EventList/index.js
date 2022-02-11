import React from "react";

import EventListRow from "../EventListRow";
import API from "../../api";

class EventList extends React.Component {
  state = {
    eventList: [],
  };

  componentDidMount() {
    API.getEventList().then((eventList) => {
      this.setState({ eventList });
    });
  }

  onUpdate = (id, newEvent) => {
    if (+id === -1) {
      API.addEvent(newEvent).then((response) => {
        console.log(response);

        this.props.onAddNewSuccess();
      });
    } else {
      API.updateEvent(newEvent, id).then((response) => {
        const updatedEventList = this.state.eventList.map((item) => {
          if (+id === item.id) {
            newEvent.id = item.id;
            return newEvent;
          }

          return item;
        });

        this.setState({ eventList: [...updatedEventList] });
      });
    }
  };

  onDelete = (id) => {
    if (+id === -1) {
      this.props.onAddNewSuccess();
    } else {
      API.deleteEvent(id).then((response) => {
        const updatedEventList = this.state.eventList.filter((item) => {
          if (+id !== item.id) {
            return true;
          }

          return false;
        });

        this.setState({ eventList: [...updatedEventList] });
      });
    }
  };

  render() {
    const _eventList = this.state.eventList;

    let eventListJSX;

    if (_eventList.length) {
      eventListJSX = _eventList.map((eventItem) => {
        return (
          <EventListRow
            key={eventItem.id}
            isAdd={false}
            eventItem={eventItem}
            onUpdate={this.onUpdate}
            onDelete={this.onDelete}
          />
        );
      });

      if (this.props.isAdd) {
        console.log("add new");
        eventListJSX.push(
          <EventListRow
            key={-1}
            isAdd={true}
            eventItem={{
              eventName: "",
              startDate: "",
              endDate: "",
              id: -1,
            }}
            onUpdate={this.onUpdate}
            onDelete={this.onDelete}
          />
        );
      }
    } else {
      eventListJSX = <h1>Empty List</h1>;
    }
    return <>{eventListJSX}</>;
  }
}

export default EventList;
