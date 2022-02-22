import axios from 'axios';

export const USER_API = (() => {

    const baseURL = "http://localhost:5000";

    const url = "http://localhost:5000/users";

    const addUser = async (user) => {
        await axios.post([url, 'add'].join("/"), user);
    }

    const findUser = async (userEmail) => {
        let response = await axios.get([url, userEmail].join("/"));
        return response.data;
    }

    const editUser = async (user) => {
        await axios.post([baseURL, 'updateUser', user._id].join("/"), user);
    }

    return { addUser, findUser, editUser }
})();