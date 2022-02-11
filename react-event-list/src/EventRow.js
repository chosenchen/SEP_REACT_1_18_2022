import React from "react";

class EventRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ev: this.props.event }
    }

    render() {
        return (
            <tbody id="event__container" key={this.state.event.id}>
                <tr className="event_display_container">
                    <td className="event_display_name">
                        <input disabled id="event__name" value={this.state.event.eventName} />
                    </td>
                    <td>
                        <input disabled type="date" id="event__start__date" value={this.state.event.startDate} />
                    </td>
                    <td>
                        <input disabled type="date" id="event__end__date" value={this.state.event.endDate} />
                    </td>
                    <td>
                        <button className="btn edit__btn" id="edit__btn" name="edit" value={this.state.event.id}>EDIT</button>
                        <button className="btn del__btn" name="delete" id={this.state.event.id}>DELETE</button>
                    </td>
                </tr>
            </tbody>
        )
    }
}

export default EventRow;