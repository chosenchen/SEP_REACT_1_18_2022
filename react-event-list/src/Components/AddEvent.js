import React from "react";
import { API } from '../Services/ConnectDB.js';
import { convertToUnix } from "../Utils/format-date.js";

function hideAddEvent() {
    document.getElementById('event__add__input__container').style.visibility = 'hidden';
    document.getElementById('event__add__input__container').style.border = 'none';
}

class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: "",
            startDate: "",
            endDate: "",
            id: ""
        }
        this.handleOnInput = this.handleOnInput.bind(this);
        this.handleOnSave = this.handleOnSave.bind(this);
    }

    handleOnInput(event) {
        this.setState({ ...this.state, [event.target.name]: event.target.value });
    }

    handleOnSave() {
        if (this.state.eventName === '' || this.state.startDate === '' || this.state.endDate === '') {
            alert('Values cannot be empty!');
        } else {
            const event = {
                eventName: this.state.eventName,
                startDate: convertToUnix(this.state.startDate),
                endDate: convertToUnix(this.state.endDate)
            };
            API.addEvent(event);
            window.location.reload();
        }
    }

    render() {
        return (
            <tfoot id="event__add__input__container">
                <tr>
                    <td>
                        <input
                            id="event__add__name__input"
                            name="eventName"
                            value={this.state.eventName}
                            onChange={this.handleOnInput}
                        />
                    </td>
                    <td>
                        <input
                            id="event__add__start__date__input"
                            name="startDate"
                            type="date"
                            value={this.state.startDate}
                            onChange={this.handleOnInput}
                        />
                    </td>
                    <td>
                        <input
                            id="event__add__end__date__input"
                            name="endDate"
                            type="date"
                            value={this.state.endDate}
                            onChange={this.handleOnInput}
                        />
                    </td>
                    <td>
                        <button
                            id="event__add__submit"
                            className="btn"
                            onClick={this.handleOnSave}
                        >SAVE</button>
                        <button
                            className="btn"
                            onClick={hideAddEvent}
                        >CLOSE</button>
                    </td>
                </tr>
            </tfoot>
        )
    }
}

export default AddEvent;