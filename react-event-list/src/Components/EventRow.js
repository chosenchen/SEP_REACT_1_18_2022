import React from "react";
import { API } from '../ConnectDB.js';
import { convertToDate, convertToUnix } from "../Utils/format-date.js";

class EventRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            eventName: props.eventName,
            startDate: convertToDate(props.startDate),
            endDate: convertToDate(props.endDate),
            id: props.id,
            edit: false
        };
        this.onInput = this.onInput.bind(this);
        this.saveChange = this.saveChange.bind(this);
        this.editEvent = this.editEvent.bind(this);
        this.delEvent = this.delEvent.bind(this);
    }

   onInput(e) {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
      }

    editEvent() {
        this.setState({ ...this.state, edit:true });
    }

    delEvent() {
        API.deleteEvent(this.state.id);
        window.location.reload();
    }

    saveChange() {
        const event = {
            eventName: this.state.eventName,
            startDate: convertToUnix(this.state.startDate),
            endDate: convertToUnix(this.state.endDate),
            id: this.state.id,
        };
        API.editEvent(event);
        this.setState({...this.state, edit:false});
    }

    render() {
        return (
            <tbody id="event__container">
                <tr className="event_display_container">
                    <td className="event_display_name">
                        <input
                             type="text"
                             name="eventName"
                             onChange={this.onInput}
                             value={this.state.eventName}
                             disabled={!this.state.edit}
                        />
                    </td>
                    <td>
                        <input
                            type="date"
                            name="startDate"
                            onChange={this.onInput}
                            value={this.state.startDate}
                            disabled={!this.state.edit}
                        />
                    </td>
                    <td>
                        <input
                            type="date"
                            name="endDate"
                            onChange={this.onInput}
                            value={this.state.endDate}
                            disabled={!this.state.edit}
                        />
                    </td>
                    <td>
                        {this.state.edit ? (
                            <div>
                                <button className="btn" onClick={this.saveChange}>SAVE</button>
                                <button className="btn"  onClick={this.delEvent}>DELETE</button>
                            </div>
                        ) : (
                            <div>
                               <button className="btn" onClick={this.editEvent}>EDIT</button>
                               <button className="btn" onClick={this.delEvent}>DELETE</button>
                            </div>
                        )}
                    </td>
                </tr>
            </tbody>
        );
    }
}

export default EventRow;