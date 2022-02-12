// const Api = () => {
const baseurl = "http://localhost:8000/events";

export const getEvents = () => fetch(baseurl).then((response) => response.json());

export const addEvent = (event) =>
    fetch(baseurl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(event),
    }).then((response) => response.json());

export const deleteEvent = (id) =>
    fetch([baseurl, id].join("/"), {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    }).then((response) => response.json());

export const editEvent = (id, event) =>
    fetch([baseurl, id].join("/"), {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(event),
    }).then((response) => response.json());

    // return {
    //     getEvents,
    //     addEvent,
    //     deleteEvent,
    //     editEvent,
    // };
// };
// export default Api;
