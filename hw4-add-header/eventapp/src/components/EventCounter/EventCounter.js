import React from "react";

import { withEventData } from "../HOC/withEventData";

class EventCounter extends React.Component {

    render() {
        const { eventList } = this.props;
        return (
            <div className="counter">
                <h1>Counter: {eventList.length}</h1>
            </div>
        )
    }
}

const Counter = withEventData(EventCounter, rerender);
export default Counter;