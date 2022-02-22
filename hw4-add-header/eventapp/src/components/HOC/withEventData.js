import React from 'react';

import { EventData } from '../../models/EventData';
import {
    getAllEvents,
    addNewEvent,
    deleteEvent,
    editEvent,
} from '../../services/event.api';

export const withEventData = (Component) => {
    return class NewComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                events: [],
                rerenderCounter: false,
                eventListCols: ['Event Name', 'Start Date', 'End Date', 'Actions'],
                commingEventCols: ['Event Name', 'Start Date', 'End Date'],
                isShowAddEventRow: false,
                newEvent: new EventData('', '' + Date.now(), '' + Date.now()),
            };
        }
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

        componentDidUpdate(prevProps) {
            console.log('prev', prevProps);
            console.log('cur', this.props);
        }
        rerender = (events) => {
            return (<h1>Counter: {events.length}</h1>);
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
            const { children, ...restProps } = this.props;
            const { events } = this.state;

            return (
                <Component eventList={events}
                    {...restProps}
                    {...this.props}
                    hanldeAddEvent={this.hanldeAddEvent}
                    hanldeEditSave={this.hanldeEditSave}
                    hanldeCancel={this.hanldeCancel}
                    hanldeOnChangeEdit={this.hanldeOnChangeEdit}
                    hanldeEdit={this.hanldeEdit}
                    hanldeDelete={this.hanldeDelete}
                    hanldeSaveAddNew={this.hanldeSaveAddNew}
                    handleClose={this.handleClose}
                    hanldeOnChange={this.hanldeOnChange}
                    isShowAddEventRow={this.state.isShowAddEventRow}
                    eventListCols={this.state.eventListCols}
                    commingEventCols={this.state.commingEventCols}
                    newEvent={this.state.newEvent}
                    ifRerender={this.state.rerenderCounter}
                >
                    {this.rerender(events)}
                </Component>
            );
        }
    }
}