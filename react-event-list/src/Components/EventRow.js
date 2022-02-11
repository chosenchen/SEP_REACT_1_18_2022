import React from "react";
import { API }from '../API/API';
import { convertToDate } from "../Utils/format-date.js";

class EventRow extends React.Component {

    constructor() {
        super();
        this.state = {
            events: []
        };
    }

    async componentDidMount() {
        const events = await API.getEvents();
        this.setState({ events });
    }

    render() {
        return (
            <tbody id="event__container">
                {this.state.events.map((event)=>
                <tr className="event_display_container" key={event.id}>
                    <td className="event_display_name">
                        <input disabled id="event__name" value={event.eventName} />
                    </td>
                    <td>
                        <input disabled type="date" id="event__start__date" value={convertToDate(event.startDate)} />
                    </td>
                    <td>
                        <input disabled type="date" id="event__end__date" value={convertToDate(event.endDate)} />
                    </td>
                    <td>
                        <button className="btn edit__btn" id="edit__btn" name="edit" value={event.id}>EDIT</button>
                        <button className="btn del__btn" name="delete" id={event.id}>DELETE</button>
                    </td>
                </tr>
                )}
            </tbody>
        )
    }
}

export default EventRow;