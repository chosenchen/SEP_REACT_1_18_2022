import React from "react";
import { withEventData } from "../HOC/withEventData";
import './ComingEvents.css';

class ComingEvents extends React.Component {

    render() {
        const { eventList, commingEventCols } = this.props;

        return (
            <section>
                <header className="coming-events__header">Coming Events</header>
                <table className="coming-events__table">
                    <thead className="coming-events__tb-header">
                        <tr>
                            {commingEventCols?.map((col) => (
                                <th key={`${col}`}>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {eventList.map(event => (
                            <tr key={event.id}>
                                <td>{event.eventName}</td>
                                <td>{event.startDate}</td>
                                <td>{event.endDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
           </section>
            )
    }
}

const UpComingEvents = withEventData(ComingEvents);
export default UpComingEvents;