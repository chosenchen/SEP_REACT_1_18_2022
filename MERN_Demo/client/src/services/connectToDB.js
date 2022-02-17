import axios from 'axios';

export const API = (() => {

    const url = "http://localhost:5000/records";

    const getAllRecords = async () => {
        let response = await axios.get(url);
        return response.data;
    }

    const addRecord = async (event) => {
        await axios.post([url, 'add'].join("/"), event);
    }

    const deleteRecord = async (id) => {
        await axios.delete([url, id].join("/"));
    }

    const editRecord = async (event) => {
        await axios.put([url, event.id].join("/"), event);
    }

    return { getAllRecords, addRecord, deleteRecord, editRecord }
})();