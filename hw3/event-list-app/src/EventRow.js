import React from "react";
import { dateConvert } from './TimeConvert';

export default class EventRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: this.props.event,
            editable: false
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.onEventChange(this.props.event, this.props.event.id, e.target.value);
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
        this.setState({ event: { ...this.state.event, [name]: value } });
    }

    handleEdit(e) {
        e.preventDefault();
        if (this.state.editable) {
            this.setState({editable: false});
            this.props.onEventChange(this.state.event, this.state.event.id, e.target.value);
        } else {
            this.setState({ editable: true });
        }
        
    }

    render() {
        let eventRow = this.state.event;
        let startDate = dateConvert(eventRow.startDate);
        let endDate = dateConvert(eventRow.endDate);

        let disabled = !this.state.editable;

        return (
            <tr className="row">
                <td>
                    <input disabled={disabled} name='eventName' value={eventRow.eventName} onChange={this.handleChange} />
                </td>
                <td>
                    <input type="date" disabled={disabled} name='startDate' value={startDate} onChange={this.handleChange} />
                </td>
                <td>
                    <input type="date" disabled={disabled} name='endDate' value={endDate} onChange={this.handleChange} />
                </td>
                <td>
                    <button value="EDIT" className="edit-btn" onClick={this.handleEdit}>{disabled ? 'EDIT' : 'SAVE'}</button>
                    <button className="delete-btn" value="DELETE" onClick={this.handleDelete}>DELETE</button>
                </td>
            </tr>
        )
    }
};