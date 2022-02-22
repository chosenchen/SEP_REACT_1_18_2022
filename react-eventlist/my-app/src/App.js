import React from "react";
import EventTable from "./components/EventTable";
import Header from "./components/Header/Header";
import ComingEvent from "./components/ComingEvent/ComingEvent";
import "./App.css";
import EventCounter from "./components/EventCounter/EventCounter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEvents: true,
      showComingEvents: false,
    };
  }

  handleHeader = (a, b) => {
    this.setState({ showEvents: a, showComingEvents: b });
  };

  render() {
    return (
      <div>
        <Header showComponent={this.handleHeader}></Header>
        <EventCounter />
        {this.state.showEvents && <EventTable />}
        {this.state.showComingEvents && <ComingEvent />}
      </div>
    );
  }
}

export default App;
