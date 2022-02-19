import React from "react";

import { getAllEvents } from "../../services/event.api";
import { EventData } from "../../models/EventData";

class ComingEvents extends React.Component {
    state = {
        events: [],
        dataCol: ['Event Name', 'Start Date', 'End Date'],
    };

    generateEditEventstate = (event) => {
        event.isEditing = false;
        event.editEvent = new EventData(
            event.eventName,
            event.startDate,
            event.endDate,
            event.id
        );
    };

    fetchAllEvents = () => {
        getAllEvents().then((data) => {
            const events = data.map(({ eventName, startDate, endDate, id }) => {
                const newEvent = new EventData(eventName, startDate, endDate, id);
                this.generateEditEventstate(newEvent);
                return newEvent;
            });

            this.setState({
                events,
            });
            console.log(events);
        });
    };

    componentDidMount() {
        this.fetchAllEvents();
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        {this.state.dataCol?.map((col) => (
                            <th key={`${col}`}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {this.state.events.map(event => (
                        <tr key={event.id}>
                            <td>{event.eventName}</td>
                            <td>{event.startDate}</td>
                            <td>{event.endDate}</td>
                        </tr>
                    ))}
                </tbody>
        </table>
            )
    }
}
export default ComingEvents;