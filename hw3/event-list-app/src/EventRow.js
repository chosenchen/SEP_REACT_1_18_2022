import React from "react";
import {dateConvert} from './TimeConvert';

export default class EventRow extends React.Component{
    render() {
        let eventRow = this.props.event;
        let startDate = dateConvert(eventRow.startDate);
        let endDate = dateConvert(eventRow.endDate);
        return (
            <tr className="row" id={eventRow.id}>
                <td>
                    <input disabled value={eventRow.eventName} />
                </td>
                <td>
                    <input disabled value={startDate} />
                </td>
                <td>
                    <input disabled value={endDate} />
                </td>
                <td>
                    <button value="EDIT" className="edit-btn">EDIT</button>
                    <button className="delete-btn" id={eventRow.id} value="DELETE">DELETE</button>
                </td>
            </tr>
        )
    }
};