//import "./App.css";
import React from "react";
import EventList from "./components/eventList";

class App extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>
              <button type="button" className="add__new">
                ADD NEW
              </button>
            </td>
          </tr>
          <tr>
            <th>Event name</th>
            <th>Start data</th>
            <th>End data</th>
            <th>Actions</th>
          </tr>
        </thead>
        <EventList />
      </table>
    );
  }
}

export default App;
