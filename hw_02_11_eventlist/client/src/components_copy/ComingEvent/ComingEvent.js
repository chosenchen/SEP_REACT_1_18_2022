import React, { Component } from 'react';
import withEventList from "../HOC/withEventList";

import "./ComingEvent.css"

class ComingEvents extends Component {
    state = {
        allEvents : this.props.eventData,
        thead : ["EventName", "Start Date", "End Date"]}
    
    
  render() {
      const {items} = this.props;
    return (
        <section>
            <table>
                <thead>
                    <tr>{this.state.thead?.map((e) =>
                            <th key={`${e}`}>{e}</th>
                    )}</tr></thead>
                <tbody>
                    {items?.map( (e) => 
                    (
                        <tr key={e.id}>
                            <td><input type="text" disabled value = {e.eventName}/></td>
                            <td><input type="text" disabled value={e.startDate}/></td>
                            <td><input type="text" disabled value={e.endDate}/></td>
                        </tr>
                    ))}
                </tbody>
             
            </table>
        </section>
    )
  }
}
const ComingEventsPage = withEventList(ComingEvents);
export default ComingEventsPage;