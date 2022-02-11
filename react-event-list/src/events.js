import React from 'react';
import $ from 'jquery'
import events from './db.json'

events = events.events;

events.forEach(ele => {
  ele.startDate = new Date(+ele.startDate);
  ele.endDate = new Date(+ele.endDate);
  ele.startDate = ele.startDate.getFullYear() + '-' + (ele.startDate.getMonth() + 1) + '-' +  (ele.startDate.getDate()+ 1);
  ele.endDate = ele.endDate.getFullYear() + '-' + (ele.endDate.getMonth() + 1)  + '-' +  (ele.endDate.getDate()+ 1);
  ele.startDate = ele.startDate.split(/\D/).slice(0,3).map(num=>num.padStart(2,"0")).join("-");
  ele.endDate = ele.endDate.split(/\D/).slice(0,3).map(num=>num.padStart(2,"0")).join("-");
});

class EventList extends React.Component {
  render() {
    return (
      events.map(event => (
        <tbody id="event__container" key={event.id}>
          <tr className="event_display_container">
            <td className="event_display_name">
              <input disabled id="event__name" value={event.eventName} />
            </td>
            <td>
              <input disabled type="date" id="event__start__date" value={event.startDate} />
            </td>
            <td>
              <input disabled type="date" id="event__end__date" value={event.endDate} />
            </td>
            <td>
              <button className="btn edit__btn" id="edit__btn" name="edit" value={event.id}>EDIT</button>
              <button className="btn del__btn" name="delete" id={event.id}>DELETE</button>
            </td>
          </tr>
        </tbody>
      ))
    )
  }
}

export default EventList;