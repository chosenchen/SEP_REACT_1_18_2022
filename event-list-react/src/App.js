import "./App.css";

import React from "react";
// import EventListContainer from "./containers/EventListContainer";
import EventListContainerHOC from "./containers/EventListContainerHOC";

class App extends React.Component {
  render() {
    return <EventListContainerHOC />;
  }
}

export default App;
