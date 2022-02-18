import React from "react";

import AddNewRow from "../../AddNewRow";
import EventRow from "../../EventRow";
import { getEvents, addEvent, deleteEvent, editEvent } from "../../Api";

import "./EventApp.css";

export default class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventList: [],
            ifAdd: false,
        };
        this.handleEventRowChange = this.handleEventRowChange.bind(this);
        this.handleAddNewRowChange = this.handleAddNewRowChange.bind(this);
        this.handleAddNew = this.handleAddNew.bind(this);
    }
    componentDidMount() {
        getEvents().then((res) => {
            this.setState({ eventList: res });
        });
    }

    handleAddNew() {
        this.setState({ ifAdd: true });
    }

    handleEventRowChange(event, id, btn) {
        if (btn === "DELETE") {
            deleteEvent(id);
            getEvents().then((res) => {
                this.setState({ eventList: res });
            });
        } else {
            editEvent(id, event).then(() =>
                getEvents().then((res) => {
                    this.setState({ eventList: res });
                })
            );
        }
    }

    handleAddNewRowChange(newEvent) {
        if (newEvent === null) {
            getEvents().then((res) =>
                this.setState({ eventList: res, ifAdd: false })
            );
        } else {
            addEvent(newEvent).then((res) =>
                getEvents().then((res) => {
                    this.setState({ eventList: res, ifAdd: false });
                })
            );
        }
    }
    render() {
        return (
            <section className='table-container'>
                <div className='add-content'>
                    <button className='add-btn' onClick={this.handleAddNew}>
                        ADD NEW
                    </button>
                </div>
                <table>
                    <thead>
                        <tr className='header'>
                            <th>Event name</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id='table-body'>
                        {this.state.eventList.map((event) => (
                            <EventRow
                                event={event}
                                key={event.id}
                                onEventChange={this.handleEventRowChange}></EventRow>
                        ))}
                        {this.state.ifAdd ? (
                            <AddNewRow
                                onNewRowChange={this.handleAddNewRowChange}></AddNewRow>
                        ) : null}
                    </tbody>
                </table>
            </section>
        );
    }
}
