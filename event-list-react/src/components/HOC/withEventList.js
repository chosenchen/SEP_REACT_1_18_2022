import React from "react";
import API from "../../api";

const withEventList = (Component) => {
  return class WrappedComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        eventList: [],
      };
    }

    setEventList = (eventList) => {
      this.setState({ eventList: [...eventList] });
    };

    componentDidMount() {
      console.log(`===Component Did Mount===`, Component);
      API.getEventList().then((eventList) => {
        this.setState({ eventList: [...eventList] });
      });
    }

    render() {
      const { eventList } = this.state;

      return (
        <Component
          {...this.props}
          eventList={eventList}
          setEventList={this.setEventList}
        />
      );
    }
  };
};

export default withEventList;
