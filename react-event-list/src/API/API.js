import axios from 'axios';

export const API = (() => {

    const url = "http://localhost:4000/events";

    const getEvents = async () => {
        let response = await axios.get(url);
        return response.data;
    }

    const addEvent = async (event) => {
        await axios.post(url, event);
    }

    const deleteEvent = async (id) => {
        await axios.delete([url, id].join("/"));
    }

    return { getEvents, addEvent, deleteEvent }
})();