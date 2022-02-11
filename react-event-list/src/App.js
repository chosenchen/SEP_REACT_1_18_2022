import './App.css';
import React from 'react';
import EventRow from './Components/EventRow.js';
import AddEvent from './Components/AddEvent';


function showBtn() {
  document.getElementById('event__add__input__container').style.visibility = 'visible';
}

class App extends React.Component {

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
          <EventRow />
          <AddEvent />
        </table>
      </section>
    )
  }
}

export default App;
