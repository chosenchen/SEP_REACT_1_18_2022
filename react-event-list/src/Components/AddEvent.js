import React from "react";
import { API } from '../API/API';
import { convertToUnix } from "../Utils/format-date.js";

function hideBtn() {
    document.getElementById('event__add__input__container').style.visibility = 'hidden';
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
        this.input = this.input.bind(this);
        this.save = this.save.bind(this);
    }

    input(event) {
        this.setState({...this.state, [event.target.name]: event.target.value});
    }

    save() {
        const event = {
            eventName: this.state.eventName,
            startDate: convertToUnix(this.state.startDate),
            endDate: convertToUnix(this.state.endDate)
        };

        console.log(event);

        API.addEvent(event);
        window.location.reload();
    }

    render() {
        return (
            <tfoot id="event__add__input__container">
                <tr>
                    <td>
                        <input id="event__add__name__input" name="eventName" value={this.state.eventName} onChange={this.input}/>
                    </td>
                    <td>
                        <input id="event__add__start__date__input" name="startDate" type="date" value={this.state.startDate} onChange={this.input} />
                    </td>
                    <td>
                        <input id="event__add__end__date__input" name="endDate" type="date" value={this.state.endDate} onChange={this.input}/>
                    </td>
                    <td>
                        <button id="event__add__submit" className="btn"
                            onClick={this.save}
                        >Save</button>
                        <button className="btn"
                            onClick={hideBtn}
                        >Close</button>
                    </td>
                </tr>
            </tfoot>
        )
    }
}

export default AddEvent;