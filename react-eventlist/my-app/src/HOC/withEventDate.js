import React from "react";
import {
  getAllEvents,
  addEvent,
  deleteEvent,
  updateEvent,
} from "../utilities/event.api";

export const withEventData = (Component) => {
  return class Newcompoent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        eventList: [],
        counterChange: false,
        // upcomingEvents: [],
        // DataisLoaded: false,
      };
    }
    componentDidMount() {
      getAllEvents().then((data) => {
        this.setState({ eventList: data, counterChange: true });
      });
    }

    render() {
      const { children, ...restProps } = this.props;
      const { eventList } = this.state;
      const { counterUpdate } = this.state;
      return (
        <Component
          {...restProps}
          events={eventList}
          counterUpdate={counterUpdate}
        />
      );
    }
  };
};
