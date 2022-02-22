import React from "react";
import Header from "./components/Header/Header";
import ComingEvent from "./components/ComingEvent/ComingEvent";
import EventApp from "./components/EventApp/EventApp";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { isEventList: false, isComingEvents: false };
  }
 
  showEventList = ()=> {
    this.setState({ isEventList: true, isComingEvents: false });
  }

  showComingEvents=()=> {
    this.setState({ isEventList: false, isComingEvents: true });
  }

  render() {
    return (
      <div className="App">
        <Header
          className="Header"
          showEventList={this.showEventList}
          showComingEvents={this.showComingEvents}
        />
        {this.state.isEventList ? <EventApp /> : null}
        {this.state.isComingEvents ? <ComingEvent /> : null}
      </div>
    );
  }
}
export default App;
