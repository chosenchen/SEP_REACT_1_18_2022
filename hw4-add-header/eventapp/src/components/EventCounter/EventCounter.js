import React from "react";

import { withEventData } from "../HOC/withEventData";

class EventCounter extends React.Component {
    
    render() {
        // const { events } = this.props;
        return (
            // <div className="counter">
            //     <h1>Counter: {events.length}</h1>
            // </div>
            this.props.children
        )
    }
}

const Counter = withEventData(EventCounter);
export default Counter;