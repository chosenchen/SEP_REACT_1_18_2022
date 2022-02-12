import React from "react";
import EventRow from "./EventRow";


export default class EventList extends React.Component {
    
    render() {
        let events = this.props.events;
        // console.log("events",events);
        return (
            <table>
                <thead>
                    <tr className="header">
                        <th>Event name</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                    {events.map((event) => <EventRow event={event} key={event.id}></EventRow>)}
                </tbody>
            </table>
        );
    }
};