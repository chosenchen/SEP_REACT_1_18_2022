import React from "react";
import { API } from '../Services/ConnectDB.js';
import { convertToDate, convertToUnix } from "../Utils/format-date.js";

class EventRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            eventName: props.eventName,
            startDate: convertToDate(props.startDate),
            endDate: convertToDate(props.endDate),
            id: props.id,
            edit: false,
        };
        this.handleOnInput = this.handleOnInput.bind(this);
        this.handleSaveChange = this.handleSaveChange.bind(this);
        this.handleCancelSave = this.handleCancelSave.bind(this);
        this.handleEditEvent = this.handleEditEvent.bind(this);
        this.handleDelEvent = this.handleDelEvent.bind(this);
    }

    handleOnInput(e) {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    handleEditEvent() {
        this.setState({ ...this.state, edit: true });
    }

    handleDelEvent() {
        API.deleteEvent(this.state.id);
        window.location.reload();
    }

    handleSaveChange() {
        if (this.state.eventName === '' || this.state.startDate === '' || this.state.endDate === '') {
            alert('Values cannot be empty!');
        } else {
            const event = {
                eventName: this.state.eventName,
                startDate: convertToUnix(this.state.startDate),
                endDate: convertToUnix(this.state.endDate),
                id: this.state.id,
            };
            API.editEvent(event);
            this.setState({ ...this.state, edit: false });
        }
    }

    handleCancelSave() {
        this.setState({ ...this.state, edit: false });
    }

    render() {
        return (
            <tbody id="event__container">
                <tr className="event_display_container">
                    <td className="event_display_name">
                        <input
                            type="text"
                            name="eventName"
                            onChange={this.handleOnInput}
                            value={this.state.eventName}
                            disabled={!this.state.edit}
                        />
                    </td>
                    <td>
                        <input
                            type="date"
                            name="startDate"
                            onChange={this.handleOnInput}
                            value={this.state.startDate}
                            disabled={!this.state.edit}
                        />
                    </td>
                    <td>
                        <input
                            type="date"
                            name="endDate"
                            onChange={this.handleOnInput}
                            value={this.state.endDate}
                            disabled={!this.state.edit}
                        />
                    </td>
                    <td>
                        {this.state.edit ? (
                            <div>
                                <button className="btn" onClick={this.handleSaveChange}>SAVE</button>
                                <button className="btn" onClick={this.handleCancelSave}>CANCEL</button>
                            </div>
                        ) : (
                            <div>
                                <button className="btn" onClick={this.handleEditEvent}>EDIT</button>
                                <button className="btn" onClick={this.handleDelEvent}>DELETE</button>
                            </div>
                        )}
                    </td>
                </tr>
            </tbody>
        );
    }
}

export default EventRow;