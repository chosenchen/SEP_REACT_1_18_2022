import './App.css';
import React from 'react';
import { API } from "./ConnectDB.js";
import EventRow from './Components/EventRow.js';
import AddEvent from './Components/AddEvent';


function showBtn() {
  document.getElementById('event__add__input__container').style.visibility = 'visible';
  document.getElementById('event__add__input__container').style.border = '1px solid lightslategrey';
}

class App extends React.Component {

  constructor() {
    super();
    this.state = { events: [] };
  }

  async componentDidMount() {
    const events = await API.getAllEvents();
    this.setState({ events });
  }

  render() {
    return (
      <section className='event__list__container'>
        <header className="table_header">
          <button id="addEvent-btn"
            onClick={showBtn}
          >Add New</button>
        </header>
        <table className='events_table'>
          <thead>
            <tr>
              <th>Event name</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Actions</th>
            </tr>
          </thead>
          {this.state.events.map((event) => {
            return (
              <EventRow
                key={event.id}
                eventName={event.eventName}
                startDate={event.startDate}
                endDate={event.endDate}
                id={event.id} 
              />
            )
          })}
          <AddEvent />
        </table>
      </section>
    )
  }
}

export default App;
