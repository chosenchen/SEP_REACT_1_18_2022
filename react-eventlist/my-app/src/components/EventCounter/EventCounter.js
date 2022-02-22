import React from "react";

import { withEventData } from "../../HOC/withEventDate";

class EventCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updata: false,
    };
  }

  counterUpdate = () => {
    const { counterUpdate } = this.props;
    console.log(counterUpdate);
    if (counterUpdate === true) {
      this.setState({ updata: true });
    }
  };

  render() {
    const { events } = this.props;
    return (
      <div className="counter">
        <h3>Counter: {events.length}</h3>
      </div>
    );
  }
}

const Counter = withEventData(EventCounter);
export default Counter;
