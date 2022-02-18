import axios from 'axios';

export const USER_API = (() => {

    const url = "http://localhost:5000/user";

    const addUser = async (user) => {
        await axios.post([url, 'add'].join("/"), user);
    }

    return { addUser }
})();