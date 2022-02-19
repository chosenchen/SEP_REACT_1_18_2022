import React from "react";

import { getMill } from "../../util/ConvertDate.js";

import API from "../../api/Api";

// when click on close, we just simply unsave and close the table row
function hideRow() {
    document.getElementById("new-row").style.display = 'none';
    window.location.reload();
}

export default class NewRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: "",
            startDate: "",
            endDate: ""
        };
        this.handleInput = this.handleInput.bind(this);

        this.handleSave = this.handleSave.bind(this);
    }
  
    handleInput(e) {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }
  
    handleSave() {
        const event = {
            eventName: this.state.eventName,
            startDate: getMill(this.state.startDate),
            endDate: getMill(this.state.endDate),
        };
  
      // check to make sure that the input is not empty
        if ( this.state.eventName === "" 
            || this.state.startDate === "" 
            || this.state.endDate === "" ) {
                alert("The table can not be empty. Please fullfill it.");
        } else {
            API.addEvent(event);
            window.location.reload();
        }
    }

    render() {
        return (
            <tr id="new-row">
                <td >
                    <input
                    className="new-event-name"
                    type="text"
                    name="eventName"
                    onChange={this.handleInput}
                    value={this.state.eventName}
                    />
                </td>
                <td>
                    <input
                    className="new-event-start-date"
                    type="date"
                    name="startDate"
                    onChange={this.handleInput}
                    value={this.state.startDate}
                    />
                </td>
                <td>
                    <input
                    className="new-event-end-date"
                    type="date"
                    name="endDate"
                    onChange={this.handleInput}
                    value={this.state.endDate}
                    />
                </td>
                <td>
                    <div>
                        <button
                            className="save-btn"
                            onClick={this.handleSave}
                        >Save
                        </button>
                        <button
                            className="close-btn"
                            onClick={hideRow}
                        >Close
                        </button>
                    </div>
                </td>
            </tr>
      );
    }
}

