import axios from 'axios';

export const fetchEvents = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/events');

  dispatch({ type: 'FETCH_EVENTS', payload: response.data });
};
