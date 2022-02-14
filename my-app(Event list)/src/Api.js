const baseUrl = 'http://localhost:5000/events';

const getEvents = () => fetch(baseUrl).then(response => response.json());

const addEvent = (event) => 
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            eventName: event.eventName,
            startDate: event.startDate,
            endDate: event.endDate
        })
    })
    .then(response => response.json());


const deleteEvent = (id) => 
    fetch(baseUrl + "/" + id, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    })
    .then(response => response.json());
 
    
const updateEvent = (event, id) =>
    fetch(baseUrl + "/" + id, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            eventName: event.eventName,
            startDate: event.startDate,
            endDate: event.endDate
        })
    });

const API = {
    getEvents,
    addEvent,
    deleteEvent,
    updateEvent
};

export default API;


