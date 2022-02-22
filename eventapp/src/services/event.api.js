const baseURL = "http://localhost:9000";
const path = "events";

const request = async (url, option) => {
  // config
  const defaultOption = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const { signal, ...restOptions } = option;

  let response;
  if (signal) {
    response = await fetch(url, { ...defaultOption, ...restOptions, signal });
  } else {
    response = await fetch(url, { ...defaultOption, ...restOptions });
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response.json());
    }, 3000);
  });
};

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
