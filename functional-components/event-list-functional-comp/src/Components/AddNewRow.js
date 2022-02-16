import React from "react";

import './AddNewRow.css';

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
    handleClose(e) {
        e.preventDefault();
        this.props.onNewRowChange(null);
    }
    render() {
        return (
            <tr>
                <td>
                    <input type='text' name='eventName' onChange={this.handleChange} />
                </td>
                <td>
                    <input type='date' name='startDate'  onChange={this.handleChange} />
                </td>
                <td>
                    <input type='date' name='endDate' onChange={this.handleChange} />
                </td>
                <td>
                    <button name='savebtn' onClick={this.handleSubmit}>SAVE</button>
                    <button className="input__closebtn" name='closebtn' onClick={this.handleClose}>CLOSE</button>
                </td>
            </tr>
        );
    }
}
