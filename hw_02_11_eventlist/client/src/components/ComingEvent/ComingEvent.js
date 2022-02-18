import AllEvents from "../AllEvents/AllEvents";

import React, { Component } from 'react';
import API from "../API/API";

export default class ComingEvent extends Component {
    state = {
        allEvents : this.props.eventData,
        thead : ["EventName", "Start Date", "End Date"]}
    
    
  render() {
    return (
        <div>
            <table>
                <thead>
                    <tr>{this.state.thead?.map((e) =>
                            <th key={`${e}`}>{e}</th>
                    )}</tr></thead>
                <tbody>
                    {this.props.eventData?.map( (e) => 
                    (
                        <tr key={e.id}>
                            <td><input type="text" disabled value = {e.eventName}/></td>
                            <td><input type="text" disabled value={e.startDate}/></td>
                            <td><input type="text" disabled value={e.endDate}/></td>
                        </tr>
                    ))}
                </tbody>
             
            </table>
        </div>
    )
  }
}
