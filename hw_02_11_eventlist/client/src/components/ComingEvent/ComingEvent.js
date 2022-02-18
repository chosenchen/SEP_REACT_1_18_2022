import AllEvents from "../AllEvents/AllEvents";

import React, { Component } from 'react';
import API from "../API/API";

export default class ComingEvent extends Component {
    state = {
        allEvents : [],
        thead : ["EventName", "Start Date", "End Date"]}
    
    componentDidMount = () => {
        API.getAllEvents().then((data) => {
            data.forEach(e => {
                this.setState({allEvents: [...this.state.allEvents]})
            });
            console.log(this.state.allEvents)
        })
    }
  render() {
    return (
        <div>
            <table>
                <thead>
                    <tr>{this.state.thead?.map((e) =>
                            <th key={`${e}`}>{e}</th>
                    )}</tr></thead>
                <tbody>
                    {this.state.allEvents?.map( (e) => 
                    (
                        <tr>
                            <td key={e.id}><input type="text" disabled value = {e.eventName}/></td>
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
