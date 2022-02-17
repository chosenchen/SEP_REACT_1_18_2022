import { convertToMill } from "./convertDate";
const baseURL = "http://localhost:3000";
const path = "events";

export const getAllEvents = () =>
  fetch([baseURL, path].join("/")).then((response) => response.json());

export const addEvent = (event) =>
  fetch([baseURL, path].join("/"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      eventName: event.eventName,
      startDate: convertToMill(event.startDate),
      endDate: convertToMill(event.endDate),
    }),
  }).then((response) => response.json());

export const deleteEvent = (id) =>
  fetch([baseURL, path, id].join("/"), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => response.json());

export const updateEvent = (event, id) =>
  fetch([baseURL, path, id].join("/"), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      eventName: event.eventName,
      startDate: event.startDate,
      endDate: event.endDate,
    }),
  });
