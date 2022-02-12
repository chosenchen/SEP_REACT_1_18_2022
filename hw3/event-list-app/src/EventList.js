import React from "react";

import AddNewRow from "./AddNewRow";
import EventRow from "./EventRow";
import { getEvents, addEvent } from "./Api";


export default class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { eventList: [] };
        this.handleEventRowChange = this.handleEventRowChange.bind(this);
        this.handleAddNewRowChange = this.handleAddNewRowChange.bind(this);
    }
    componentDidMount() {
        getEvents().then((res) => {
            this.setState({ eventList: res });
        });
    }
    handleEventRowChange() {
        
    }
    handleAddNewRowChange(newEvent) {
        addEvent(newEvent).then((res) => this.setState(res));
        getEvents().then((res) => {
            this.setState({ eventList: res });
        });
        this.props.isAdd = false;
    }
    render() {
        return (
            <table>
                <thead>
                    <tr className="header">
                        <th>Event name</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                    {this.state.eventList.map((event) => <EventRow event={event} key={event.id} onEventChange={this.handleEventRowChange}></EventRow>)}
                    {this.props.isAdd ? <AddNewRow onNewRowChange={this.handleAddNewRowChange}></AddNewRow> : null}
                </tbody>
            </table>
        );
    }
};