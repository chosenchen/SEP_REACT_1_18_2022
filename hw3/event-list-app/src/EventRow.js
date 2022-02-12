import React from "react";

export default class EventRow extends React.Component{
    render() {
        let eventRow = this.props.event;
        return (
            <tr className="row" id={eventRow.id}>
                <td>
                    <input disabled value={eventRow.eventName} />
                </td>
                <td>
                    <input disabled value={eventRow.startDate} />
                </td>
                <td>
                    <input disabled value={eventRow.endDate} />
                </td>
                <td>
                    <button value="EDIT" className="edit-btn">EDIT</button>
                    <button className="delete-btn" id={eventRow.id} value="DELETE">DELETE</button>
                </td>
            </tr>
        )
    }
};