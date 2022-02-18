import React from "react";
import EventTable from "./components/EventTable";
//import Header from "./components/Header/Header";
import ComingEvent from "./components/ComingEvent/ComingEvent";
import "./App.css";
import { Link } from "react-router-dom";
import Navigation from "./components/Header/Navigation";

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
      <div>
        <Navigation />
        <EventTable />
      </div>
    );
  }
}

export default App;
