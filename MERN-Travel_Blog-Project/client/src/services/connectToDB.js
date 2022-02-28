const baseURL = 'http://localhost:5000';
const path = 'records';

export const getAllRecords = () => {
    const controller = new AbortController();
    const signal = controller.signal;
    return {
        controller,
        fetchResult: fetch([baseURL, path].join('/'), {
            method: 'GET',
            signal,
        }).then((response) =>
            new Promise((res, rej) => {
                res(response.json());
            })
        ),
    };
};

export const findRecord = async (id) => {
    const response = await fetch([baseURL, path, id].join('/'));
    return await response.json();
};

export const addNewRecord = (newRecord) => {
    fetch([baseURL, path, 'add'].join('/'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(newRecord),
    }).then((response) => response.json());
}

export const editRecord = (record) =>
    fetch([baseURL, 'update', record._id].join('/'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(record),
    }).then((response) => response.json());

export const deleteRecord = (id) =>
    fetch([baseURL, id].join('/'), {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    }).then((response) => response.json());
