import './App.css';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import EventRow from './Components/EventRow.js';

function showBtn() {
  document.getElementById('event__add__input__container').style.visibility = 'visible';
}
function hideBtn() {
  document.getElementById('event__add__input__container').style.visibility = 'hidden';
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
          <tfoot id="event__add__input__container">
            <tr>
              <td>
                <input id="event__add__name__input" />
              </td>
              <td>
                <input id="event__add__start__date__input" type="date" />
              </td>
              <td>
                <input id="event__add__end__date__input" type="date" />
              </td>
              <td>
                <button id="event__add__submit" className="btn">Save</button>
                <button className="btn"
                  onClick={hideBtn}
                >Close</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    )
  }
}
export default App;
