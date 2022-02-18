import axios from 'axios';

export const API = (() => {

    const url = "http://localhost:5000/records";

    const getAllRecords = async () => {
        let response = await axios.get(url);
        return response.data;
    }

    const addRecord = async (log) => {
        await axios.post([url, 'add'].join("/"), log);
    }

    const deleteRecord = async (id) => {
        await axios.delete([url, id].join("/"));
    }

    const editRecord = async (log) => {
        await axios.put([url, log._id].join("/"), log);
    }

    return { getAllRecords, addRecord, deleteRecord, editRecord }
})();