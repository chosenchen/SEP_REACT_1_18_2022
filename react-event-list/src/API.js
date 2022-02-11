const url = "http://localhost:4000";

const getEvents = () =>
  fetch([url])
  .then((response) => response.json());

const API = {
  getEvents
};

export default API;