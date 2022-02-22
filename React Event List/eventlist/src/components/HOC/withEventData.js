import React from "react";

import { appApi } from "../.././appApi.js";

import { toUnixDate, fromUnixDate } from "../../utils.js";

const withEventData = (Component) => {
  return class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        eventList: [],
      };
    }

    fetchAllEvents = async () => {
      const events = await appApi.getEvents();
      const updatedEvents = events.map((event) => {
        event.isEditing = false;
        event.editEvent = {
          eventName: event.eventName,
          startDate: fromUnixDate(event.startDate),
          endDate: fromUnixDate(event.endDate),
          id: event.id,
        };
        event.startDate = fromUnixDate(event.startDate);
        event.endDate = fromUnixDate(event.endDate);
        return event;
      });

      this.setState({ eventList: updatedEvents });
    };

    componentDidMount() {
      this.fetchAllEvents();
    }

    updateEventList = (id, bool, e) => {
      //    const {name, value} = e.target;

      if (e) {
        
        this.setState({
          eventList: this.state.eventList.map((event) => {
            if (event.id === id) {
              return {
                ...event,
                editEvent: {
                  ...event.editEvent,
                  [e.target.name]: e.target.value,
                },
              };
            } else {
              return event;
            }
          }),
        });
      } else {
        this.setState({
          eventList: this.state.eventList.map((event) => {
            if (event.id === id) {
              return { ...event, isEditing: bool };
            } else {
              return event;
            }
          }),
        });
      }
    };

    render() {
      return (
        <Component
          {...this.props}
          eventList={this.state.eventList}
          fetchAllEvents={this.fetchAllEvents}
          updateEventList={this.updateEventList}
        />
      );
    }
  };
};

export default withEventData;
