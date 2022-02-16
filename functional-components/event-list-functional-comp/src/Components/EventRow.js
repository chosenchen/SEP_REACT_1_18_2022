import {React, useState} from "react";

import { dateConvert } from './TimeConvert';

import './EventRow.css';

function EventRow(props) {
    const [event, setEvent] = useState(props.event);
    const [editable, setEditable] = useState(false);

    const handleDelete = (e) => {
        e.preventDefault();
        props.onEventChange(props.event, e.target.value);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        let value;
        if (name === 'startDate' || name === 'endDate') {
            const date = new Date(e.target.value);
            value = date.getTime().toString();
        } else {
            value = e.target.value;
        }
        setEvent({ ...event, [name]: value });
    }

    const handleEdit = (e) => {
        e.preventDefault();
        if (editable) {
            setEditable(false);
            props.onEventChange(event, e.target.value);
        } else {
            setEditable(true);
        }

    }

    let eventRow = event;
    let startDate = dateConvert(eventRow.startDate);
    let endDate = dateConvert(eventRow.endDate);

    let disabled = !editable;

    return (
        <tr className="row">
            <td>
                <input disabled={disabled} name='eventName' value={eventRow.eventName} onChange={handleChange} />
            </td>
            <td>
                <input type="date" disabled={disabled} name='startDate' value={startDate} onChange={handleChange} />
            </td>
            <td>
                <input type="date" disabled={disabled} name='endDate' value={endDate} onChange={handleChange} />
            </td>
            <td>
                <button value="EDIT" className="edit-btn" onClick={handleEdit}>{disabled ? 'EDIT' : 'SAVE'}</button>
                <button className="delete-btn" value="DELETE" onClick={handleDelete}>DELETE</button>
            </td>
        </tr>
    );
}
export default EventRow;