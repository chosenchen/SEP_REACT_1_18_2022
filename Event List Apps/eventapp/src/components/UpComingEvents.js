import React from "react";

import UpComingEventsRow from "./UpComingEventsRow";
import { EventData } from "../models/EventData";

import { getAllEvents } from './../services/event.api';

class UpComingEvents extends React.Component {

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
        });
    };

    componentDidMount() {
        this.fetchAllEvents();
    }

    render() {
        return (
            <section className="event-app">
                <table className="event-app__table">
                    <thead>
                        <tr>
                            {this.state.dataCol?.map((col) => (
                                <th key={`${col}`}>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.events?.map((event) =>
                            <UpComingEventsRow
                                key={event.id}
                                event={event}
                            />
                        )}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default UpComingEvents;
