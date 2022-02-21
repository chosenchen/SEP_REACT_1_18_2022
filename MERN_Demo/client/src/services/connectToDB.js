import axios from 'axios';

export const API = (() => {

    const baseURL = "http://localhost:5000";

    const url = "http://localhost:5000/records";

    const getAllRecords = async () => {
        let response = await axios.get(url);
        return response.data;
    }

    const findRecord = async (id) => {
        let response = await axios.get([url, id].join("/"));
        return response.data;
    }

    const addRecord = async (log) => {
        await axios.post([url, 'add'].join("/"), log);
    }

    const deleteRecord = async (id) => {
        await axios.delete([url, id].join("/"));
    }

    const editRecord = async (log) => {
        console.log([baseURL, 'update', log._id].join("/"));
        await axios.post([baseURL, 'update', log._id].join("/"), log);
    }

    return { getAllRecords, findRecord, addRecord, deleteRecord, editRecord }
})();