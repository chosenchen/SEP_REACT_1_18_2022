import React from "react";
import { getAllEvents } from "../utilities/event.api";

export const withEventData = (Component) => {
  return class Newcompoent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        eventList: [],
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
      return <Component {...restProps} events={eventList} />;
    }
  };
};
