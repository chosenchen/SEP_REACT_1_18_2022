import axios from 'axios';

export const API = (() => {

    const url = "http://localhost:4000/events";

    const getEvents = async () => {
        let response = await axios.get(url);
        return response.data;
    }
   

    return { getEvents }
})();