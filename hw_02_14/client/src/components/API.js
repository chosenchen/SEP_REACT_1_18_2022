const baseurl = "http://localhost:3005";
const path = "events";

// get data
const getAllEvents = () =>
    fetch([baseurl, path].join("/")).then((response) => response.json())
    //.then((json) => console.log(json));

// create new data
const addEvent = (event) =>
    fetch([baseurl, path].join("/"), {
        method: "POST",
        body: JSON.stringify(event),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }).then((response) => response.json());

const deleteEvent = (id) =>
    fetch([baseurl, path, id].join("/"), { method: "DELETE" });

// update data
const updateEvent = (id, event) => {
    fetch([baseurl, path, id].join("/"), {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(event),
    })
        .then((response) => response.json())
}

const API = {getAllEvents, updateEvent, deleteEvent, addEvent}

export default API