import React from "react";
import { WithEventData } from "./HOC/WithEventData";

//think about why the counter is not updated
//the ui is not rendering 
//EventApp.js:59 Uncaught (in promise) TypeError:
//  this.fetchAllEvents is not a function at EventApp.js:59:1
class EventCounter extends React.Component{
    render(){
        return(
            <h1>Counter:{this.props.events.length}</h1>
        )
        }
}
export default WithEventData(EventCounter)