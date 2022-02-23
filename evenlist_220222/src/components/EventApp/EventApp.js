import React, { useEffect, useState } from 'react'
import {
    getAllEvents,
    addNewEvent,
    deleteEvent,
    editEvent
} from '../../services/event.api'
import EventData from '../../models/EventData'
import './EventApp.css'
import Button from '../Button/Button'

function EventApp() {

    const [state, setState] = useState({
        dataCol: [],
        events: [],
        isShowAddEventRow: false,
        newEvent: {
            eventName: '',
            startDate: '' + Date.now(), //Conver number to string
            endDate: '' + Date.now() //Conver number to string

        }
    })


  
    //Create a new function to fetch events
    const fetchAllEvents = () => {
        getAllEvents().then(data => {
            const events = data.map(({ eventName, startDate, endDate, id }) => {
                const newEvent = new EventData(eventName, startDate, endDate, id)
                //generate new event
                newEvent.isEditing = false
                newEvent.editEvent = new EventData(eventName, startDate, endDate, id)
                return newEvent
            })

            setState({
                events:events,
                dataCol: ["Event Name", "Start Date", "End Date", "Actions", ''],
             
            })
        })

    }

    const handleAddEvent = () => {
        setState({
            isShowAddEventRow: true,
         })
    }

    const handleSaveAddEvent = () => {
        const { eventName, startDate, endDate } = state.newEvent
        const newEvent = new EventData(eventName, startDate, endDate)
        newEvent.parseTimeStamp()
        console.log('newEvent', newEvent)
        // const newEvent = {
        //     ...this.state.newEvent
        // }
        if (newEvent.isValidForSave()) {

            addNewEvent(newEvent).then(data => {
                console.log('Successful get the data', data)
                //After successfully get the data, trigger getAllEvents, use cllback function
                // this.setState({ events: [...this.state.events, data]}) // update data goes to the top | refresh the page will go to bottom
                // getAllEvents().then(data=>{
                //     this.setState({
                //         events: data
                //     })
                // }) 
                fetchAllEvents()
            })
            handleClose() //trigger handler close 
        } else {
            alert('inValid')
        }
    }

    const handleEdit = (id) => {

        setState({
            events: state.events.map(event => {
                if (event.id === id) {
                    return { ...event, isEditing: true }

                } else {
                    return event
                }
            })
        })
    }

    const handleOnChange = (e) => {
        console.log('' + Date.now())
        const key = e.target.name
        const value = e.target.value
        setState({
            newEvent: {
                ...state.newEvent,
                [key]: value
            }
        })
    }

    const handleDelete = (id) => {
        deleteEvent(id).then(data => {
            fetchAllEvents(); //Update the data
        }).catch((error) => {
            console.warn(error) // notify there's error comes up
        })
    }

    const handleClose = () => {
        setState({
            isShowAddEventRow: false,
            newEvent: {
                eventName: '',
                startDate: '' + Date.now(), //Conver number to string
                endDate: '' + Date.now() //Conver number to string   
            }
        })
    }


    useEffect(() => {
       fetchAllEvents()

    }, [])

    const handleOnChangeEdit = ({ target: { name, value } }, id) => {
        setState({
            events: state.events.map(event => {
                if (event.id === id) {
                    return {
                        ...event,
                        editEvent: { ...event.editEvent, [name]: value }
                    } // this is the amazing part | event.editEvent

                } else {
                    return event
                }
            })

        })
    }

    const handleEditSave = (editEventObj) => {
        editEvent(editEventObj).then(data => {

            setState({
                events: state.events.map(event => {
                    if (event.id === editEventObj.id) {
                        return {
                            ...editEventObj,
                            isEditing: false
                        }

                    } else {
                        return event
                    }
                })
            })

        })

    }

    const handleCancel = (id) => {
        setState({
            events: state.events.map(event => {
                if (event.id === id) {
                    return { ...event, isEditing: false }

                } else {
                    return event
                }
            })
        })
    }
       
 
 
        return (
            <section className='event-app'>
                <header className="event-app__header">
                    <Button onClick={handleAddEvent}>Add Event</Button>
                </header>
                <table className='event-app__table'>
                    <thead>
                        <tr>
                            {state.dataCol?.map((col, index) => (
                                <th key={col}>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>

                        {state.events?.map((event, index) =>
                            event.isEditing ?
                                (<tr key={`${event}_${index}`}>
                                    <td><input type="text" name="eventName" value={event.editEvent.eventName} onChange={(e) => handleOnChangeEdit(e, event.id)}
                                    /></td>
                                    <td><input type="date" name="startDate"
                                        value={event.editEvent.startDate} onChange={(e) => handleOnChangeEdit(e, event.id)}
                                    /></td>
                                    <td><input type="date" name="endDate"
                                        value={event.editEvent.endDate} onChange={(e) => handleOnChangeEdit(e, event.id)}
                                    /></td>
                                    <td><Button className="btn" onClick={() => handleEditSave(event.editEvent)}>SAVE</Button></td>
                                    <td><Button className="btn" onClick={() => handleCancel(event.id)}>CANCEL</Button></td>
                                </tr>)
                                :
                                (<tr key={`${event}_${index}`}>
                                    <td><input type="text" disabled value={event.eventName} onChange={handleOnChange}
                                    /></td>
                                    <td><input type="date" disabled
                                        value={event.startDate} onChange={handleOnChange}
                                    /></td>
                                    <td><input type="date" disabled
                                        value={event.endDate} onChange={handleOnChange}
                                    /></td>
                                    <td><Button className="btn" onClick={() => handleEdit(event.id)}>EDIT</Button></td>
                                    <td><Button className="btn" onClick={() => handleDelete(event.id)}>DELETE</Button></td>
                                </tr>)
                        )}

                    </tbody>
                    <tfoot>
                        {state.isShowAddEventRow ?
                            <tr>
                                <td><input type="text" value={state.newEvent.eventName} name="eventName" onChange={handleOnChange} /></td>
                                <td><input type="date" value={state.newEvent.startDate} name="startDate" onChange={handleOnChange} /></td>
                                <td><input type="date" value={state.newEvent.endDate} name="endDate" onChange={handleOnChange} /></td>
                                <td><Button onClick={handleSaveAddEvent}>SAVE</Button></td>
                                <td><Button onClick={handleClose}>CLOSE</Button></td>
                            </tr>
                            : null}

                    </tfoot>
                </table>
            </section>)
    }


export default EventApp