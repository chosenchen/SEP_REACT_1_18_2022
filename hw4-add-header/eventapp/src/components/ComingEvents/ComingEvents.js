import React from "react";
import './ComingEvents.css';

class ComingEvents extends React.Component {

    render() {
        const { events, dataCol } = this.props;

        return (
            <table className="coming-events__table">
                <thead className="coming-events__header">
                    <tr>
                        {dataCol?.map((col) => (
                            <th key={`${col}`}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
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