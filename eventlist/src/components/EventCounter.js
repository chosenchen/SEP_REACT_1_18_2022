import React from "react";
import { WithEventData } from "./HOC/WithEventData";

class EventCounter extends React.Component{
    render(){
        return(
            <h1>Counter:{this.props.events.length}</h1>
        )
        }
}
export default WithEventData(EventCounter)