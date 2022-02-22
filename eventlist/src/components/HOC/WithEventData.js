import React from "react";
import { getAllEvents } from "../../services/event.api";
import { EventData } from "../../models/EventData";

export const WithEventData = (WrappedComponents) => {
  class WithEventData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        events: [],
      };
    }
    generateEditEventstate = (event) => {
      event.isEditing = false;
      event.editEvent = new EventData(
        event.eventName,
        event.startDate,
        event.endDate,
        event.id
      );
    };
    fetchAllEvents = () => {
      getAllEvents().then((data) => {
        const events = data.map(({ eventName, startDate, endDate, id }) => {
          const newEvent = new EventData(eventName, startDate, endDate, id);
          this.generateEditEventstate(newEvent);
          return newEvent;
        });
        this.setState({
          events,
        });
      });
    };

    componentDidMount() {
      this.fetchAllEvents();
    }

    render() {
      const { children, ...restProps } = this.props;
      const { events } = this.state;
      console.log(events);

      return <WrappedComponents events={events} {...restProps} />;
    }
  }
  return WithEventData;
};
