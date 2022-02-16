import React, { useState } from "react";

import './AddNewRow.css';

function AddNewRow(props) {
    const [event, setEvent] = useState({
        eventName: '',
        startDate: '',
        endDate: ''
    });
//TODO
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
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewRowChange(event);
    }

    const handleClose = (e) => {
        e.preventDefault();
        props.onNewRowChange(null);
    }

    return (
        <tr>
            <td>
                <input type='text' name='eventName' onChange={handleChange} />
            </td>
            <td>
                <input type='date' name='startDate' onChange={handleChange} />
            </td>
            <td>
                <input type='date' name='endDate' onChange={handleChange} />
            </td>
            <td>
                <button name='savebtn' onClick={handleSubmit}>SAVE</button>
                <button className="input__closebtn" name='closebtn' onClick={handleClose}>CLOSE</button>
            </td>
        </tr>
    );
}
export default AddNewRow;
