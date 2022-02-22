import React from 'react'
import './EventApp.css'
import Button from '../Button/Button'
import withEventData from '../HOC/withEventData'
import EventCounter from '../Counter/Counter'

class EventApp extends React.Component {

    render() {
        let {len, dataCol, events, isShowAddEventRow, newEvent, handleAddEvent,
            handleSaveAddEvent, handleEdit, handleOnChange, handleDelete, handleClose,
            handleOnChangeEdit, handleEditSave, handleCancel} = this.props 
  
        return (
            <section className='event-app'>
                {/* <div>{`Total items: ${len}`}</div> */}
                <EventCounter len={len} />
                <header className="event-app__header">
                    <Button onClick={handleAddEvent}>Add Event</Button>
                </header>
                <table className='event-app__table'>
                    <thead>
                        <tr>
                            {dataCol?.map((col, index) => (
                                <th key={`${col}`}>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>

                        {events?.map((event, index) =>
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
                        {isShowAddEventRow ?
                            <tr>
                                <td><input type="text" value={newEvent.eventName} name="eventName" onChange={handleOnChange} /></td>
                                <td><input type="date" value={newEvent.startDate} name="startDate" onChange={handleOnChange} /></td>
                                <td><input type="date" value={newEvent.endDate} name="endDate" onChange={handleOnChange} /></td>
                                <td><Button onClick={handleSaveAddEvent}>SAVE</Button></td>
                                <td><Button onClick={handleClose}>CLOSE</Button></td>
                            </tr>
                            : null}

                    </tfoot>
                </table>
            </section>)
    }
}

const eventList = withEventData(EventApp)
export default eventList