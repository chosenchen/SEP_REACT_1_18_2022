import React, {useState, useEffect, useCallback} from "react";

import AddNewRow from "./AddNewRow";
import EventRow from "./EventRow";
import { getEvents, addEvent, deleteEvent, editEvent } from "./Api";

import './EventList.css';

function EventList() {
    const [eventList, setEventList] = useState([]);
    const [ifAdd, setIfAdd] = useState(false);

    const getEventFromApi = useCallback(() => {
        getEvents().then((res) => {
            setEventList(res);
        })
    }, []);

    useEffect(() => {
        getEventFromApi()
    },[getEventFromApi]
    );

    const handleAddNew = () => {
        setIfAdd(true );
    }

    const handleEventRowChange = (event,btn) => {
        if (btn === 'DELETE') {
            deleteEvent(event.id);
            getEvents().then((res) => {
                setEventList(res); 
            })
        } else {
            editEvent(event.id, event)
                .then(() => getEvents().then((res) => {
                    setEventList(res);
                }));

        }


    }

    const handleAddNewRowChange = (newEvent) => {
        if (newEvent === null) {
            getEvents().then(res => {
                setEventList(res);
                setIfAdd(false);
            });
        } else {
            addEvent(newEvent).then((res) => getEvents().then((res) => {
                setEventList(res); 
                setIfAdd(false);
            }));
        }
    }

    return (
        <section className="table-container">
            <div className="add-content">
                <button className="add-btn" onClick={handleAddNew}>ADD NEW</button>
            </div>
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
                    {eventList.map((event) => <EventRow event={event} key={event.id} onEventChange={handleEventRowChange}></EventRow>)}
                    {ifAdd ? <AddNewRow onNewRowChange={handleAddNewRowChange}></AddNewRow> : null}
                </tbody>
            </table>
        </section>
    );
}

export default EventList;