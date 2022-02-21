import React from 'react';
import {
    getAllEvents,
    addNewEvent,
    deleteEvent,
    editEvent,
} from '../../services/event.api';
import EventApp from '../EventApp/EventApp';
import ComingEvents from '../ComingEvents/ComingEvents';

import { EventData } from '../../models/EventData';

class EventTable extends React.Component {
    state = {
        events: [],
        eventListCols: ['Event Name', 'Start Date', 'End Date', 'Actions'],
        commingEventCols: ['Event Name', 'Start Date', 'End Date'],
        isShowAddEventRow: false,
        newEvent: new EventData('', '' + Date.now(), '' + Date.now()),
    };

    generateEditEventstate = (event) => {
        event.isEditing = false;
        event.editEvent = new EventData(
            event.eventName,
            event.startDate,
            event.endDate,
            event.id
        );
    };

    fetchAllEvents = () => {
        getAllEvents().then((data) => {
            const events = data.map(({ eventName, startDate, endDate, id }) => {
                const newEvent = new EventData(eventName, startDate, endDate, id);
                this.generateEditEventstate(newEvent);
                return newEvent;
            });

            this.setState({
                events,
            });
        });
    };

    componentDidMount() {
        this.fetchAllEvents();
    }

    hanldeAddEvent = () => {
        this.setState({
            isShowAddEventRow: true,
        });
    };
    hanldeOnChange = ({ target: { name, value } }) => {
        this.setState({
            newEvent: {
                ...this.state.newEvent,
                [name]: value,
            },
        });
    };

    hanldeDelete = (id) => {
        deleteEvent(id)
            .then(() => {
                this.fetchAllEvents();
            })
            .catch((error) => {
                console.warn(error);
            });
    };

    handleClose = () => {
        this.setState({
            isShowAddEventRow: false,
            newEvent: new EventData('', '' + Date.now(), '' + Date.now()),
        });
    };

    hanldeSaveAddNew = () => {
        const { eventName, startDate, endDate } = this.state.newEvent;
        const newEvent = new EventData(eventName, startDate, endDate);
        newEvent.parseTimeStamp();
        if (newEvent.isValidForSave()) {
            addNewEvent(newEvent).then((data) => {
                //this.setState({ events: [data, ...this.state.events] });
                this.fetchAllEvents();
            });
            this.handleClose();
        } else {
            alert('inValid');
        }
    };
    hanldeEdit = ({ id }) => {
        this.setState({
            events: this.state.events.map((event) => {
                if (event.id === id) {
                    return { ...event, isEditing: true };
                } else {
                    return event;
                }
            }),
        });
    };

    hanldeOnChangeEdit = ({ target: { name, value } }, { id }) => {
        this.setState({
            events: this.state.events.map((event) => {
                if (event.id === id) {
                    return { ...event, editEvent: { ...event.editEvent, [name]: value } };
                } else {
                    return event;
                }
            }),
        });
    };

    hanldeCancel = (id) => {
        this.setState({
            events: this.state.events.map((event) => {
                if (event.id === id) {
                    return { ...event, isEditing: false };
                } else {
                    return event;
                }
            }),
        });
    };
    hanldeEditSave = (editEventObj) => {
        editEvent(editEventObj).then((data) => {
            this.setState({
                events: this.state.events.map((event) => {
                    if (event.id === editEventObj.id) {
                        return {
                            ...editEventObj,
                            isEditing: false,
                        };
                    } else {
                        return event;
                    }
                }),
            });
        });
    };

    render() {
        const { showComingEvents } = this.props;
        return (
            <div>
                {
                    showComingEvents ?
                        <ComingEvents events={this.state.events} dataCol={this.state.commingEventCols} />
                        :
                        <EventApp hanldeAddEvent={this.hanldeAddEvent} dataCol={this.state.eventListCols}
                            events={this.state.events}
                            hanldeEditSave={this.hanldeEditSave}
                            hanldeCancel={this.hanldeCancel}
                            hanldeOnChangeEdit={this.hanldeOnChangeEdit}
                            hanldeEdit={this.hanldeEdit}
                            hanldeDelete={this.hanldeDelete}
                            hanldeSaveAddNew={this.hanldeSaveAddNew}
                            handleClose={this.handleClose}
                            hanldeOnChange={this.hanldeOnChange}
                            isShowAddEventRow={this.state.isShowAddEventRow}
                            newEvent={this.state.newEvent}/>
                }
        </div>
        );
    }
}

export default EventTable;