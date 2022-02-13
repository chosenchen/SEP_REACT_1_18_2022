import React from "react";
import {dateConvert} from './TimeConvert';

export default class EventRow extends React.Component{
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete() {
        this.props.onEventChange(this.props.event, this.props.event.id);
    }
    render() {
        let eventRow = this.props.event;
        let startDate = dateConvert(eventRow.startDate);
        let endDate = dateConvert(eventRow.endDate);
        return (
            <tr className="row">
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
                    <button className="delete-btn" value="DELETE" onClick={this.handleDelete}>DELETE</button>
                </td>
            </tr>
        )
    }
};