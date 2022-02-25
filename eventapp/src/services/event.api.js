
   
const baseURL = 'http://localhost:8000';
const path = 'events';

const request = async (url, option) => {
  const defaultOption = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const { signal, ...restOptions } = option;

  let fetchOption;
  if (signal) {
    fetchOption = {
      ...defaultOption,
      ...restOptions,
      signal,
    };
  } else {
    fetchOption = { ...defaultOption, ...restOptions };
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        fetch(url, fetchOption)
          .then((response) => {
            return response.json();
          })
          .catch((err) => {
            reject(err);
          })
      );
    }, 0);
  });
}

export const getAllEvents = (signal = null) =>
  request([baseURL, path].join("/"), { method: "GET", signal });

export const addNewEvent = (newEvent, signal = null) =>
  request([baseURL, path].join("/"), {
    method: "POST",
    body: JSON.stringify(newEvent),
    signal,
  });

export const deleteEvent = (event, signal = null) =>
  request([baseURL, path, event.id].join("/"), { method: "DELETE", signal });

export const editEvent = (editEvent, signal = null) =>
  request([baseURL, path, editEvent.id].join("/"), {
    method: "PUT",
    body: JSON.stringify(editEvent),
    signal,
  });
