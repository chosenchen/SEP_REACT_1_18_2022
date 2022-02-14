import "./App.css";
import React from "react";
import EventList from "./components/eventList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNew: false,
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd() {
    this.setState({ addNew: true });
    console.log("add new");
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>
              <button
                type="button"
                className="add__new"
                onClick={this.handleAdd}
              >
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
        <EventList addRow={this.state.addNew} />
      </table>
    );
  }
}

export default App;
