import React from "react";

export default class AddNewRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {
                eventName: '',
                startDate: '',
                endDate: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleChange(e) {
        const name = e.target.name;
        let value;
        if (name === 'startDate' || name === 'endDate') {
            const date = new Date(e.target.value);
            value = date.getTime().toString();
        } else {
            value = e.target.value;
        }
    
        this.setState({event: { ...this.state.event, [name]: value }});
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onNewRowChange(this.state.event);
    }
    handleClose() {

    }
    render() {
        const newEvent = this.state.event;
        return (
            <tr>
                <td>
                    <input type='text' name='eventName' value={newEvent.eventName} onChange={this.handleChange} />
                </td>
                <td>
                    <input type='date' name='startDate' value={newEvent.startDate} onChange={this.handleChange} />
                </td>
                <td>
                    <input type='date' name='endDate' value={newEvent.endDate} onChange={this.handleChange} />
                </td>
                <td>
                    <button name='savebtn' onClick={this.handleSubmit}>SAVE</button>
                    <button name='closebtn' onClick={this.handleClose}>CLOSE</button>
                </td>
            </tr>
        );
    }
}
