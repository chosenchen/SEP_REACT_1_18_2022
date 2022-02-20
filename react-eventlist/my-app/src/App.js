import React from "react";
import EventTable from "./components/EventTable";
import Header from "./components/Header/Header";
import ComingEvent from "./components/ComingEvent/ComingEvent";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNew: false,
      showEvents: true,
      showComingEvents: false,
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd() {
    this.setState({ addNew: true });
    console.log("add new");
  }
  handleHeader = (a, b) => {
    this.setState({ ...this.state, showEvents: a, showComingEvents: b });
  };

  render() {
    return (
      <div>
        <Header showComponent={this.handleHeader}></Header>
        {this.state.showEvents && <EventTable />}
        {this.state.showComingEvents && <ComingEvent />}
      </div>
    );
  }
}

export default App;
